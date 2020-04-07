function drawTree(x1, y1, x2, y2, depth) {

    if (depth > 6)
        return;

    x.fillStyle=R(20,depth*20)

    var dx = x2 - x1;
    var dy = y1 - y2;

    var x3 = x2 - dy;
    var y3 = y2 - dx;
    var x4 = x1 - dy;
    var y4 = y1 - dx;
    var x5 = x4 + 0.5 * (dx - dy);
    var y5 = y4 - 0.5 * (dx + dy);


    x.beginPath();
    x.moveTo(x1, y1);
    x.lineTo(x2, y2);
    x.lineTo(x3);
    x.lineTo(x4);
    x.moveTo(x3, y3);
    x.lineTo(x4, y4);
    x.lineTo(x5);

    x.fill();
    drawTree(x4, y4, x5, y5, depth + 1);
    drawTree(x5, y5, x3, y3, depth + 1);
}
drawTree(800, h=c.height|=0, 1050, h, 0);

// for

(d=(x1, y1, x2, y2, depth) =>{

    if (depth > 7)
        return;

    x.fillStyle=R(20,depth*20)

    var dx = x2 - x1;
    var dy = y1 - y2;
    var x3,y3,x4,y4,x5,y5;

    x.beginPath();
    x.moveTo(x1, y1);
    x.lineTo(x2, y2);
    x.lineTo(x3=x2-dy, y3=y2-dx);
    x.lineTo(x4=x1-dy, y4=y1-dx);
    x.moveTo(x3, y3);
    x.lineTo(x4, y4);
    // TODO: do square + this
    x.lineTo(x5=x4+0.5*(dx-dy), y5=y4-0.5*(dx+dy));
    x.fill();
    d(x4, y4, x5, y5, depth + 1);
    d(x5, y5, x3, y3, depth + 1);
})(800, h=c.height|=0, 1050, h, 0);

    var x5,y5;
    x.beginPath();
    x.moveTo(x1, y1);
    x.lineTo(x2, y2);
    x.lineTo(x2=x2-dy, y2=y2-dx);
    x.lineTo(x1=x1-dy, y1=y1-dx);
    x.moveTo(x2, y2);
    x.lineTo(x1, y1);
    x.lineTo(x5=x1+0.5*(dx-dy), y5=y1-0.5*(dx+dy));

c.height|=0

    const square = (X, Y, r, R=1.33) => {
    	x.beginPath();
        for(i=5;i--;) {
        	c=Math.PI/2*(i||.5)+(Math.PI/R)
            r=i?r:r*1.3
        	x.lineTo(X+(S(c)*r),Y+(C(c)*r))
        }
        x.fill();
        c=Math.PI/2*.20+(Math.PI/R)
        return [
        	X+(S(c)*r),Y+(C(c)*r)
        ];
    }

    (d=(x1, y1, r, rotate, depth) =>{

    if (depth > Math.min(t*30,12))
        return;

    x.fillStyle=R(20,depth*20)
        	x.beginPath();
        for(i=5;i--;) {
        	c=Math.PI/2*(i||.5)+(Math.PI/rotate)
            r=i?r:r*1.3
        	x.lineTo(x1+(S(c)*r),y1+(C(c)*r))
            if (!i) {
            	//d(x2*.87, y2, r*.55, rotate*.8, depth + 1)
            }
        }
        x.fill();
        c=Math.PI/2*.20+(Math.PI/rotate)
        const [x2,y2] = [
        	x1+(S(c)*r),y1+(C(c)*r)
        ];
        c=Math.PI/2*.80+(Math.PI/rotate)
        const [x3,y3] = [
        	x1+(S(c)*r),y1+(C(c)*r)
        ];


    d(x2, y2, r*.6, rotate*1.3, depth + 1)
    d(x3, y3, r*.6, rotate*0.9, depth + 1)
    //move into loop

})(900, 1000, 200, 1.33, 0);
    //square(900, 1000, 100);
//

 (d=(x1, y1, r, rotate, depth) =>{

    if (depth > Math.min(t*30,6))
        return;

    x.fillStyle=R(20,depth*20)
        	x.beginPath();
        for(i=4;i--;) {
        	c=Math.PI/2*i+(Math.PI/rotate)
        	x.lineTo(x2=x1+(S(c)*r),y2=y1+(C(c)*r))
            if (i==1) {
            	d(x2, y2, r*.8, rotate, depth + 1)
                    //d(x2, y2, r*.6, rotate*(1.3), depth + 1)
    //d(x3, y3, r*.6, rotate*(.9), depth + 1)
            }
            if (i==0) {
            	d(x2, y2, r*.8, rotate, depth + 1)
                    //d(x2, y2, r*.6, rotate*(1.3), depth + 1)
    //d(x3, y3, r*.6, rotate*(.9), depth + 1)
            }
        }


	x.fill();

    //move into loop

})(900, 1e3, 200, 1.33, 0);

 (d=(x1, y1, r, rotate, depth) =>{

    if (depth > Math.min(t*30,8))
        return;

    x.fillStyle=R(20,depth*20)
    x.beginPath()
    	pos=[];
        for(i=4;i--;) {
        	c=Math.PI/3*i+(Math.PI/rotate)
        	x.lineTo(x2=x1+(S(c)*r),y2=y1+(C(c)*r))
			pos.push([x2,y2])
        }

		x.fill();
        pos.slice(2).forEach(([x,y],i) => {
        	d(x, y, r*.8, rotate*(i?1.2:.9), depth + 1);
        })

    //move into loop

})(900, 1e3, 250, 1.2, 0);

 with(x)(d=(x1, y1, r, rotate, depth) =>{

    if (depth > (t*30< 8?t*30:8))
        return;

    beginPath(fillStyle=`#1${depth}0`)
    	p=[];
        for(i=4;i--;) {
        	c=i+(3/rotate)
        	lineTo(x2=x1+(S(c)*r),y2=y1+(C(c)*r))
            if (i<2)p[i]=[x2,y2]
        }
		fill();
        p.map(([x,y],i) => {
            d(x, y, r*.8, rotate*(i?.9:1.2), depth+1);
        })

})(900, 1e3, 240, 1.1, 0);

 with(x)(d=(x1, y1, r, rotate, depth) =>{

    if (depth > 8)
        return;

    beginPath(fillStyle=`#1${depth}0`)
    	p=[];
        for(i=4;i--;) {
        	lineTo(
            	x2=x1+(S(c=i+rotate)*r),
            	y2=y1+(C(c)*r)
            )
            if (i<2)p[i]=[x2,y2]
        }
		fill();
        p.map(([x,y],i) => {
            d(x, y, r*.8, rotate*(i?1.1:.8), depth+1);
        })

})(900, 1e3, 240, 2.7, 0);


 with(x)(d=([x1, y1], r, rotate, depth) =>{
    if (depth < 9) {
    p=[beginPath(fillStyle=`#1`+depth+0)];
        for(i=4;i--;i<2&&(p[i]=[x2,y2]))
        	lineTo(
            	x2=x1+(S(c=i+rotate)*r),
            	y2=y1+(C(c)*r)
            )
		fill();
        p.map((a,i) => (
            d(a, r*.8, rotate*(i?1.1:.8), depth+1)
        ))
     }

})([1e3, 1e3], 240, 2.7, 0);

 with(x)(d=([x1, y1], r, rotate, depth) =>{
    if (depth < 9) {
    p=[beginPath(fillStyle=`#1`+depth+0)];
        for(i=4;i--;i<2&&(p[i]=Q))
        	lineTo(
            	...(Q=[x1+(S(c=i+rotate)*r),
            	y1+(C(c)*r)])
            )
		fill();
        p.map((a,i) => (
            d(a, r*.8, rotate*(i?1.1:.8), depth+1)
        ))
     }

})([1e3, 1e3], 240, 2.7, 0);

 with(x)(d=([x1, y1], r, rotate, depth) =>{
    if (depth < 9) {
    p=[beginPath(fillStyle=`#1`+depth+0)];
        for(i=4;i--;)
        	lineTo(
            	...(p[i%2]=[x1+(S(c=i+rotate)*r),
            	y1+(C(c)*r)])
            );
		fill();
        p.map((a,i) => (
            d(a, r*.8, rotate*(i?1.1:.8), depth+1)
        ))
     }

})([1e3, 1e3], 240, 2.7, 0);
