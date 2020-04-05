function getR(angle) {
    const r = (1 + 0.9 * C(8 * angle))
        * (1 + (0.1 * C(24 * angle)))
        * (0.9 + (0.1 * C(200 * angle)))
        * (1 + S(angle));
    return r * 200;
}
for (let a = 0.0; a < 6; a += .001) {
    const r = getR(a+4.7);
    const X = (S(a) * r);
    const Y = (C(a) * r);
    x.lineTo(X+900, Y+900);
}
x.fillStyle='#0A0';
x.fill();
//
for (a = 0; a < 6; a += .001) {
    r = (1 + .9 * C(8 * a))
        * (1 + (0.1 * C(24 * a)))
        * (0.9 + (0.1 * C(200 * a)))
        * (1 + S(a)) * 200;
    x.lineTo(S(a-4.7) * r+900, C(a-4.7) * r+900);
}
x.fillStyle='#0A0';
x.fill();
