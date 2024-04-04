(module
  (memory (export "memory") 1 10)
  ;; (data (i32.const 0x0) "\03\04\05\06")
  (func (export "add1") (param $a i32) (param $b i32) (result i32)
    (i32.const 0) ;; address
    ;; Load mem[0] and add 1
    (i32.load (i32.const 0))
    (i32.const 100)
    (i32.add)
    ;; Store back to mem[0]
    (i32.store)

   local.get $a
   local.get $b
   i32.add)

  (func (export "sub1") (param $a i32) (param $b i32) (result i32)
   local.get $a
   local.get $b
   i32.sub)
)

