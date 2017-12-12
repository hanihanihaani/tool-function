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
var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2.............";
var obj = parseQueryString(url);
       
function parseQueryString(argu){
  var str = argu.split('?')[1];
  console.log("str",str)
  var result = {};
  var temp = str.split('&');
  console.log("temp",temp)
  for(var i=0; i<temp.length; i++)
  {
     var temp2 = temp[i].split('=');
     console.log("temp2",temp2);
     result[temp2[0]] = temp2[1];
  }
  return result;
}