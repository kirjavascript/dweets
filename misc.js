// parralax
// union jack
// racetrack + drawImage
//const {width: w, height: h} = c
x.fillStyle='blue';
x.fillRect(0,0,w,h)
x.fillStyle='white';
x.fillRect(0,h/2-(h/6),w,h/3)
x.fillRect(w/2-(w/6),0,w/3,h)
x.fillStyle='red';
x.fillRect(0,h/2-(h/10),w,h/5)


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
//
c.style.filter=``;

x.fillStyle=`hsl(${10*(Math.random())+180} 99%75%`
//x.fillRect(S(t*2)*9+(c.width/2),C(t*2)*9+(c.height/2),20,20)
//x.fillRect(0|Math.random()*c.width,C(t)*c.height/2+500,40,40)
x.font='6in"'
x.fillText(c,-200,700+C(t)*90)
x.drawImage(c, 0, 0, c.width, c.height, -40, -40, c.width+80, c.height+80)
