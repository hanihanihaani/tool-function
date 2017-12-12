
var str = "fhsdfjkdslfjdslkf"
var obj = {}

for (var i=0;i<str.length;i++) {
  //获取字符串每个字符的索引
  var char = charAt(i);
  if (obj[char]) {
    obj[char]++
  } else {
    obj[char] = 1
  }
}

console.log("obj",obj)//obj为每个字符出现的次数

var max  = 0;
for ( var key in obj ) {
  if (max < obj[key]) {
    max = obj[key]
  }
}

for (var key in obj) {
  if (obj[key] = max) {
    console.log("出现最多的字符",key)
    console.log("出现的次数是",max);
  }

}