function objToQuery(obj) {
  let str = "";
  for (let key in obj) {
    str = str + key + "=" + obj[key] + "&"
  }
  return str.substr(0,str.length-1)
}

function queryToObj(url) {
  var str  = url.split("?")[1];
  var result = {};
  var tmp = str.split("&");
  for (var i=0;i<tmp.length;i++) {
    var tmp1 = tmp[i].split("=");
    result[tmp1[0]] = tmp1[1];
  }
  return result;
}