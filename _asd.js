const fs = require('fs');

const wasm = fs.readFileSync('./main.wasm', 'utf8');
p = [...wasm.toString()].map(d => d.charCodeAt())
console.log(JSON.stringify(p));

for(i=0;i< 60;i++) {

console.log(i, p.map(d => String.fromCharCode(d ^ i)).join``);
}
[...` ASM!   %#! !'*!&MEMORY" +-! a +'DWITTER`].map(d=>d.charCodeAt``^32)
const cycles = current_case.map(c => `${algs[c][0]} - ${weights[c]} <input type="button" value="show more" onclick="adjust_weight(${c}, 1); render();"></input> <input type="button" value="show less" onclick="adjust_weight(${c}, -1); render();"></input>`).join("\r\n");

const cycles = current_case.map(c => [
    h('input', { value: 'show more' , onclick: () => adjust_weight(c, 1)}),
    h('input', { value: 'show less' , onclick: () => adjust_weight(c, -1)}),
]).join("\r\n");
