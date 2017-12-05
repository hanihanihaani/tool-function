var arr = [2,4,5,6,3,3,4,5]

function remove(arr) {
  var result = [];
  var obj = {};
  for (var i=0;i<arr.length;i++) {
    obj[arr[i]] = "";
  }
  for (i in obj) {
    result.push(i)
  }
  return result;
};

console.log(remove(arr));