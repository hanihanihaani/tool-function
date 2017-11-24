function random (min,max) {
    var tmp = max - min;
    return Math.round(tmp * Math.random() + min)
}

console.log(random (10,20));