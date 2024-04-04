import { readFileSync } from 'node:fs';

Promise.all([
    WebAssembly.instantiate(readFileSync('./dynlink1.wasm')),
    WebAssembly.compile(readFileSync('./dynlink2.wasm'))
]).then(modules => {
    const instance1 = modules[0].instance;
    const module2 = modules[1];
    const importObject = {
        imports: {
            add1: instance1.exports.add1,
            sub1: instance1.exports.sub1,
        }
    };
    return WebAssembly.instantiate(module2, importObject);
}).then(instance => {
    const mem = new Uint32Array(instance.exports.memory.buffer);
    console.log("Before first call", mem[0]);
    console.log("2 * (4 + 3) = " + instance.exports.myadd(4, 3));
    console.log("After first call", mem[0]);
    console.log("2 * (4 + 3) = " + instance.exports.myadd(4, 3));
    console.log("After second call", mem[0]);
});
