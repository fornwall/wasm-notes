(module
 (memory (export "memory") 1 10)
 (func $my_func (param i32)
    (i32.store (i32.const 4) (i32.const 1))
 )
)
