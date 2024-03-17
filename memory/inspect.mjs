import { readFileSync } from 'node:fs';

const wasmBuffer = readFileSync('./memory.wasm');

function showDetails(mem) {
    console.log("Bytes: " + mem.buffer.byteLength);
    console.log("Pages: " + (mem.buffer.byteLength / 65536));
}

WebAssembly.instantiate(wasmBuffer).then(module => {
  const instance = module.instance;
  console.log('instance', instance);
  console.log('exports', instance.exports);
  const mem = instance.exports.memory;
  showDetails(mem);
});
