(module
  (func $add1 (import "imports" "add1") (param i32) (param i32) (result i32))
  (func $sub1 (import "imports" "sub1") (param i32) (param i32) (result i32))

  (memory (export "memory") 1 10)
  ;;(data (i32.const 0x0) "\03\04\05\06")

  (func (export "myadd") (param $a i32) (param $b i32) (result i32)
    (i32.const 0) ;; address

    ;; Load mem[0] and add 1
    (i32.load (i32.const 0))
    (i32.const 1)
    (i32.add)

    ;; Store back to mem[0]
    (i32.store)

    (call $add1 (local.get $a) (local.get $b))
    (i32.const 2)
    (i32.mul)
   )

   (func (export "mysub") (param $a i32) (param $b i32) (result i32)
     (call $sub1 (local.get $a) (local.get $b))
     (i32.const 2)
     (i32.mul)
   )
)

