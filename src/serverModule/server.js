
// const XMLHR = new XMLHttpRequest();
// const http = "http://10.12.88.215:8080";
// const url = "/api/code/login/send_code";
// const HttpServer = http + url;
// export default  HttpServer;


// const Http = 'http://10.12.88.215:8080';
// const BaseUrl = '';
// const HttpServe = () => {
//   if (!BaseUrl && BaseUrl === '') {
//     BaseUrl = '/'
//   }
//   return (Http + BaseUrl);
// } 

// const requstOption = {
//   //请求方式
//   method: 'POST',
//   //请求头
//   headers:{
//     'Accept': 'application/json',
//     //取决于服务器端，所以请和服务器端的开发人员沟通确定清楚
//     'Content-Type': 'application/json',  
//     appVersion : ReqParams.appVersion,
//     timeStamp : ReqParams.timeStamp,
//     userAgent : ReqParams.userAgent,
//     sign : ReqParams.sign,
//   },
//   //请求体(GET方式无需设置)
//   body: JSON.stringify({data}),
// };

// const ReqData = "17359453234";
// const ReqParams = (reqData, coolback) => {
//     let reqHead = {
//       userAgent: "web",
//       timeStamp: (new Date()).valueOf().toString(),
//       appVersion: "1.0.1",
//     };
//     let sortArr = [];
//     let mergeObj = Object.assign({},reqData,reqHead);
//     let newkeyArr = Object.keys(mergeObj).sort();
//     newkeyArr.forEach((val,k) => {
//       for(var v in mergeObj) {
//         if (val == v){
//           val = {}
//           k = v
//           val[k] = mergeObj[v]
//           sortArr.push(val);
//           return
//         }
//       }
//     })
//     let reapteData = JSON.stringify(sortArr).replace(/[\[|\]|\{|\}|\'|\"]/g, '');
//     reapteData = reapteData.replace(/[,]/g, '&');
//     reapteData = reapteData.replace(/[:]/g, '=');
//     reapteData += '&key=DN6AjdNsv6PZXYUoOxVmrVILB+S';
//     // console.log(reapteData, 'sort sort bef');
//     reqHead['sign'] = MD5(reapteData).toUpperCase();
//     // console.log(reqHead['sign'], 'sort aft');
//     coolback = reqHead;
//     return coolback
// }