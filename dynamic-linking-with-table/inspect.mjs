import { readFileSync } from 'node:fs';

const importObject = {
    js: {
        table: new WebAssembly.Table({ initial:1, element:"anyfunc"})
    }
};

Promise.all([
    WebAssembly.instantiate(readFileSync('./dynlink1.wasm'), importObject),
    WebAssembly.instantiate(readFileSync('./dynlink2.wasm'), importObject),
]).then(arr => {
    console.log(arr[1].instance);
    const instance = arr[1].instance;
    const mem = new Uint32Array(instance.exports.memory.buffer);
    console.log("Before first call", mem[0]);
    console.log("2 * (4 + 3) = " + instance.exports.myadd(4, 3));
    console.log("After first call", mem[0]);
    console.log("2 * (4 + 3) = " + instance.exports.myadd(4, 3));
    console.log("After second call", mem[0]);
});
