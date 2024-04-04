(module
  (import "js" "table" (table 1 funcref))

  (memory (export "memory") 1 10)

  (func $add (param $a i32) (param $b i32) (result i32)
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

   ;; Place functions into the table
   (elem (i32.const 0) $add)
)

