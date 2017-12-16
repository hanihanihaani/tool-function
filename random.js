function random (min,max) {
    var tmp = max - min;
    return Math.round(tmp * Math.random() + min)
}

console.log(random (10,20));

function randomStr(len) {
  var str = "sfldsjfsjdfkdfjldkfjl";
  var tmp = "";
  for (var i=0;i<len;i++) {
    var rand = Math.round(Math.random()*str.length);
    tmp += str.charAt(rand)
  }
  return tmp;
}