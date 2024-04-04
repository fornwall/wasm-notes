(module
  (import "js" "table" (table 1 funcref))
  (type $sig (func (param $a i32) (param $b i32) (result i32)))

  (memory (export "memory") 1 10)

  (func (export "myadd") (param $a i32) (param $b i32) (result i32)
    (i32.const 0) ;; address

    ;; Load mem[0] and add 1
    (i32.load (i32.const 0))
    (i32.const 1)
    (i32.add)

    ;; Store back to mem[0]
    (i32.store)

    (call_indirect (type $sig) (local.get $a) (local.get $b) (i32.const 0))
    (i32.const 2)
    (i32.mul)
   )
)

