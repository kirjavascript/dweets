// sine wave:
c.width|=0 // clear the canvas
//x.moveTo(0, 0);
for(i=0;i < 1e3;i+=1){
  x.lineTo(i, 500+500*S(i/40+t));
}
x.strokeStyle='#C33'
x.lineWidth=9;
x.stroke();


// object
// TODO: https://www.dwitter.net/d/11260
c.width|=0
x.font='36em x';
c.style.filter=`blur(7px)contrast(20)`;
//c.style.filter=``;
for(i=2;i--;){
x.fillStyle=R(i&&200,i||150,i||255);
x.fillText(x,-180-i*40,720-C(i+t)*40);

}
// x.scale(1,1);

r=(n)=>0|Math.random()*n
for(i=700;i-=40>0;)
x.drawImage(c,0,200+i,2e3,10,r(8),200+i,2e3,10)

//g2
r=(n)=>([]+t)[0]?new Date/5%n:0
for(i=1;i--;)
(S(t*9)+'')[3]==9&&
x.drawImage(c,0,I=200+(+new Date%100*9),9e3,80,(Math.random()-.5)*140,I,9e3,80)

q=260;x.fillText(s[i],i%4*q,(0|i/4)*q+q);

// erratic timing
x.fillText(([]+t/6)[10],c.width=-1,500)
