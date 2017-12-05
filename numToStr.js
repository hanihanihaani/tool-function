function toStr(n) {
  var str = "";
  if (str < 10) {
    str = "0" + n;
  } else {
    str = n
  }
  return str
}

function forMat(n) {
  return n.toString().replace(/^(\d$)/,"0$1")
} 
console.log(forMat(3));