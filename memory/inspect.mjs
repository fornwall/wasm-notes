import { readFileSync } from 'node:fs';

const wasmBuffer = readFileSync('./memory.wasm');

function showDetails(mem, msg) {
    console.log(msg);
    console.log("Bytes: " + mem.buffer.byteLength);
    console.log("Pages: " + (mem.buffer.byteLength / 65536));
}

WebAssembly.instantiate(wasmBuffer).then(({module, instance}) => {
  console.log('instance', instance);
  console.log('exports', instance.exports);

  const mem = instance.exports.memory;
  showDetails(mem, "Initial");

  mem.grow(1);
  showDetails(mem, "After grow(1)");

  mem.grow(4);
  showDetails(mem, "After grow(4)");
});
