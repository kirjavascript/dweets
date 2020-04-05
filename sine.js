
// sine wave:
c.width|=0 // clear the canvas
//x.moveTo(0, 0);
for(i=0;i < 1e3;i+=1){
  x.lineTo(i, 500+500*S(i/40+t));
}
x.strokeStyle='#C33'
x.lineWidth=9;
x.stroke();
