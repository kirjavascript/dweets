W=WebAssembly;I=Int8Array;c.outerHTML=String.fromCharCode(...new I(new W.Instance(new W.Module(new I([...`<]OQ=<<<9?=<=;6=:QYQSNE><71=<},7;XKUHHYN`].map(d=>d.charCodeAt()^60)))).exports.memory.buffer))
W=WebAssembly;I=Int8Array;String.fromCharCode(...new I(new W.Instance(new W.Module(new I([...` ASM!   %#! !'*!&MEMORY" +-! a +'DWITTER`].map(d=>d.charCodeAt``^32)))).exports.memory.buffer))

(module
  (memory 1)
  (data (i32.const 0) "dwitter")
  (func $f1 (export "d")(result i32)i32.const 0)
)

(module
 (table 0 anyfunc)
 (memory $0 1)
 (data (i32.const 16) "Hello World\00")
 (data (i32.const 28) "\10\00\00\00")
 (export "memory" (memory $0))
)

(module
 (memory $0 1)
 (data (i32.const 0) "dwitter")
 (export "memory" (memory $0))
)

// regpack version
_="m=zInstance(zModule(v[0,97q5{9~|||~^3Z,96|~`7,3^0Zj4^2Zq2|j5^1Z|~,6`9}j7~46},2,6{9{1{9q1q4`1,2j5{4_||{^8Z^2}Yq~46ZY`,72_,32,87q1q4{8{0|])));h=vkmemory.buffer);s='';for(i=khello();h[i];i++)s+=String.fromCharCode(h[i]);console.log(s)~,1}`8`8`8|j0{~0znew WebAssembly.vnew Uint8Array(q~1km.exports.j|,`~2_{1{8{8q1^~3Z}~Yj65~6q";for(i of"YZ^_`jkqvz{|}~")with(_.split(i))_=join(pop());eval(_)
https://wasdk.github.io/WasmFiddle/?wvzhb

// failed idea
WebAssembly.instantiate(new Int8Array([0,97,115,109,1,0,0,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,138,128,128,128,0,1,6,109,101,109,111,114,121,2,0,11,155,128,128,128,0,2,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0,0,65,28,11,4,16,0,0,0])).then(q=>console.log([...new Int8Array(q.instance.exports.memory.buffer)].slice(16,27).map(a=>String.fromCharCode(a)).join``))

// change name to e
m=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,0,1,127,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,142,128,128,128,0,2,6,109,101,109,111,114,121,2,0,1,101,0,0,10,138,128,128,128,0,1,132,128,128,128,0,0,65,16,11,11,146,128,128,128,0,1,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0])));h=new Uint8Array(m.exports.memory.buffer);s='';for(i=m.exports.e();h[i];i++)s+=String.fromCharCode(h[i]);s

// use pointer directly, better string unpacking
m=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,138,128,128,128,0,1,6,109,101,109,111,114,121,2,0,11,155,128,128,128,0,2,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0,0,65,28,11,4,16,0,0,0])));h=new Uint8Array(m.exports.memory.buffer);[...h.slice(16,27)].map(a=>String.fromCharCode(a)).join``

// Int8Array, remove variables
[...new Int8Array(new WebAssembly.Instance(new WebAssembly.Module(new Int8Array([0,97,115,109,1,0,0,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,138,128,128,128,0,1,6,109,101,109,111,114,121,2,0,11,155,128,128,128,0,2,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0,0,65,28,11,4,16,0,0,0]))).exports.memory.buffer).slice(16,27)].map(a=>String.fromCharCode(a)).join``

// resuse wasm object
W=WebAssembly;I=Int8Array;[...new I(new W.Instance(new W.Module(new I([0,97,115,109,1,0,0,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,138,128,128,128,0,1,6,109,101,109,111,114,121,2,0,11,155,128,128,128,0,2,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0,0,65,28,11,4,16,0,0,0]))).exports.memory.buffer).slice(16,27)].map(a=>String.fromCharCode(a)).join``

// 128 substitution (non-regpack trick)
W=WebAssembly;I=Int8Array;q=128;[...new I(new W.Instance(new W.Module(new I([0,97,115,109,1,0,0,0,4,132,q,q,q,0,1,112,0,0,5,131,q,q,q,0,1,0,1,6,129,q,q,q,0,0,7,138,q,q,q,0,1,6,109,101,109,111,114,121,2,0,11,155,q,q,q,0,2,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0,0,65,28,11,4,16,0,0,0]))).exports.memory.buffer)].slice(16,27).map(a=>String.fromCharCode(a)).join``

// even better string unpacking
W=WebAssembly;I=Int8Array;q=128;String.fromCharCode(...[...new I(new W.Instance(new W.Module(new I([0,97,115,109,1,0,0,0,4,132,q,q,q,0,1,112,0,0,5,131,q,q,q,0,1,0,1,6,129,q,q,q,0,0,7,138,q,q,q,0,1,6,109,101,109,111,114,121,2,0,11,155,q,q,q,0,2,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0,0,65,28,11,4,16,0,0,0]))).exports.memory.buffer)].slice(16,27))
