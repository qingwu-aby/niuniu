(this.webpackJsonpinit=this.webpackJsonpinit||[]).push([[0],{102:function(e,t){},157:function(e,t,a){e.exports=a(315)},162:function(e,t,a){},167:function(e,t){},168:function(e,t){},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(162),a(152)),i=a(43),s=a(317),m=a(319),d=a(321),u=a(139),p=a.n(u),v=function(){var e=function(){var e=document.createElement("canvas"),t=e.getContext("2d");return{canvas:!!t,imageData:!!t.getImageData,dataURL:!!e.toDataURL,btoa:!!window.btoa}}();function t(e,t,a){var n=e.width,r=e.height;void 0==t&&(t=n),void 0==a&&(a=r);var c=document.createElement("canvas"),l=c.getContext("2d");return c.width=t,c.height=a,l.drawImage(e,0,0,n,r,0,0,t,a),c}function a(e,a,n,r){return(e=t(e,n,r)).toDataURL(a)}function n(e){document.location.href=e}function r(e){var t=document.createElement("img");return t.src=e,t}function c(e){return"image/"+(e=e.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function l(e){if(!window.btoa)throw"btoa undefined";var t="";if("string"==typeof e)t=e;else for(var a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return btoa(t)}function o(e){var t=e.width,a=e.height;return e.getContext("2d").getImageData(0,0,t,a)}function i(e,t){return"data:"+t+";base64,"+e}var s=function(e){var t=e.width,a=e.height,n=t*a*3,r=n+54,c=[66,77,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,54,0,0,0],o=[40,0,0,0,255&t,t>>8&255,t>>16&255,t>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,1,0,24,0,0,0,0,0,255&n,n>>8&255,n>>16&255,n>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=(4-3*t%4)%4,s=e.data,m="",d=t<<2,u=a,p=String.fromCharCode;do{for(var v=d*(u-1),g="",f=0;f<t;f++){var E=f<<2;g+=p(s[v+E+2])+p(s[v+E+1])+p(s[v+E])}for(var h=0;h<i;h++)g+=String.fromCharCode(0);m+=g}while(--u);return l(c.concat(o))+l(m)},m=function(r,l,m,d){if(e.canvas&&e.dataURL)if("string"==typeof r&&(r=document.getElementById(r)),void 0==d&&(d="png"),d=c(d),/bmp/.test(d)){var u=o(t(r,l,m));n(i(s(u),"image/octet-stream"))}else{n(a(r,d,l,m).replace(d,"image/octet-stream"))}},d=function(n,l,m,d){if(e.canvas&&e.dataURL){if("string"==typeof n&&(n=document.getElementById(n)),void 0==d&&(d="png"),d=c(d),/bmp/.test(d)){var u=o(t(n,l,m));return r(i(s(u),"image/bmp"))}return r(a(n,d,l,m))}};return{saveAsImage:m,saveAsPNG:function(e,t,a){return m(e,t,a,"png")},saveAsJPEG:function(e,t,a){return m(e,t,a,"jpeg")},saveAsGIF:function(e,t,a){return m(e,t,a,"gif")},saveAsBMP:function(e,t,a){return m(e,t,a,"bmp")},convertToImage:d,convertToPNG:function(e,t,a){return d(e,t,a,"png")},convertToJPEG:function(e,t,a){return d(e,t,a,"jpeg")},convertToGIF:function(e,t,a){return d(e,t,a,"gif")},convertToBMP:function(e,t,a){return d(e,t,a,"bmp")}}}(),g=a(153),f=a(320),E=a(318),h=a(10),y={"\u65e5\u671f":{title:"\u65e5\u671f",type:"date"},"\u5f53\u5929\u767b\u5165\u4eba\u6570":{title:"\u5f53\u5929\u767b\u5165\u4eba\u6570",type:"currentPerson"},"\u4e3b\u52a8\u8fdb\u5165\u4eba\u6570":{title:"\u4e3b\u52a8\u8fdb\u5165\u4eba\u6570",type:"currentInitiativeCount"},"\u9080\u8bf7\u8fdb\u5165\u4eba\u6570":{title:"\u9080\u8bf7\u8fdb\u5165\u4eba\u6570",type:"invitePerson"},"\u63a8\u9001\u6d88\u606f\u5524\u9192":{title:"\u63a8\u9001\u6d88\u606f\u5524\u9192",type:"pushMsgWake"},"\u5206\u4eab\u4eba\u6570":{title:"\u5206\u4eab\u4eba\u6570",type:"sharePerson"},"\u5206\u4eab\u6b21\u6570":{title:"\u5206\u4eab\u6b21\u6570",type:"shareCount"},"\u5206\u4eab\u4e14\u6709\u6210\u529f\u9080\u5165\u7684\u4eba":{title:"\u5206\u4eab\u4e14\u6709\u6210\u529f\u9080\u5165\u7684\u4eba",type:"shareSuccPersonal"},"\u62c9\u4eba\u6570":{title:"\u62c9\u4eba\u6570",type:"getCount"},"\u5546\u54c1\u8be6\u60c5\u9875pv":{title:"\u5546\u54c1\u8be6\u60c5\u9875pv",type:"goodsPV"},"\u5546\u54c1\u8be6\u60c5\u9875uv":{title:"\u5546\u54c1\u8be6\u60c5\u9875uv",type:"goodsUV"},"\u4f1a\u573a\u9875pv":{title:"\u4f1a\u573a\u9875pv",type:"activityPV"},"\u4f1a\u573a\u9875uv":{title:"\u4f1a\u573a\u9875uv",type:"activityUV"},"\u52a0\u8d2d\u4eba\u6570":{title:"\u52a0\u8d2d\u4eba\u6570",type:"addCart"},"\u4e0b\u5355\u4eba\u6570":{title:"\u4e0b\u5355\u4eba\u6570",type:"orderCount"},"\u4ed8\u6b3e\u4eba\u6570":{title:"\u4ed8\u6b3e\u4eba\u6570",type:"payOne"},gmv:{title:"gmv",type:"gmv"},"\u5546\u7965\u5230\u8fbe\u7387":{title:"\u5546\u7965\u5230\u8fbe\u7387",type:"arriveGoods"},"\u4f1a\u573a\u8fbe\u5230\u7387":{title:"\u4f1a\u573a\u8fbe\u5230\u7387",type:"arriveActivity"},"\u4e0b\u5355\u8f6c\u5316":{title:"\u4e0b\u5355\u8f6c\u5316",type:"orderTransform"},"\u652f\u4ed8\u8f6c\u5316":{title:"\u652f\u4ed8\u8f6c\u5316",type:"payTransform"},"\u4eba\u5747gmv":{title:"\u4eba\u5747gmv",type:"aveGmv"}},N={"\u7528\u6237\u89d2\u8272":{title:"\u7528\u6237\u89d2\u8272",type:"role"},"\u5f53\u5929\u767b\u5165\u4eba\u6570":{title:"\u5f53\u5929\u767b\u5165\u4eba\u6570",type:"currentLoginPerson"},"\u6b21\u65e5\u7559\u5b58":{title:"\u6b21\u65e5\u7559\u5b58",type:"nextKeep"},"\u6b21\u65e5\u7559\u5b58\u7387":{title:"\u6b21\u65e5\u7559\u5b58\u7387",type:"nextKeepPercent"},"\u7528\u6237\u89d2\u8272_1":{title:"\u7528\u6237\u89d2\u8272_1",type:"role_1"},"\u5f53\u5929\u767b\u5165\u4eba\u6570_1":{title:"\u5f53\u5929\u767b\u5165\u4eba\u6570_1",type:"currentLoginPerson_1"},"\u6b21\u65e5\u7559\u5b58_1":{title:"\u6b21\u65e5\u7559\u5b58_1",type:"nextKeep_1"},"\u6b21\u65e5\u7559\u5b58\u7387_1":{title:"\u6b21\u65e5\u7559\u5b58\u7387_1",type:"nextKeepPercent_1"},"uv\u7edd\u5bf9\u503c\u53d8\u5316":{title:"uv\u7edd\u5bf9\u503c\u53d8\u5316",type:"UVChange"},"uv\u53d8\u5316\u767e\u5206\u6bd4":{title:"uv\u53d8\u5316\u767e\u5206\u6bd4",type:"UVChangePercent"},"\u6b21\u65e5\u7559\u5b58\u7387\u53d8\u5316":{title:"\u6b21\u65e5\u7559\u5b58\u7387\u53d8\u5316",type:"nextKeepPercentChange"}},w=[{title:"\u6c47\u603b",type:"total"},{title:"\u65b0\u7528\u6237",type:"newUser"},{title:"\u5b9d\u5b9d",type:"baby"},{title:"\u76f4\u5347\u638c\u67dc",type:"shopKeeper"},{title:"10\u7c89\u638c\u67dc",type:"shopKeeper10"},{title:"50\u7c89\u638c\u67dc",type:"shopKeeper50"},{title:"\u9752\u94dc",type:"bronze"},{title:"\u767d\u94f6",type:"sliver"},{title:"\u9ec4\u91d1",type:"gold"},{title:"\u94bb\u77f3",type:"diamond"}],b=["\u672c\u5468","\u4e0a\u5468","\u53d8\u5316","\u53d8\u5316\u767e\u5206\u6bd4"],C={"\u4e0a\u5468":"9","\u672c\u5468":"18","\u53d8\u5316":"19","\u53d8\u5316\u767e\u5206\u6bd4":"20"},I=["date","arriveGoods","arriveActivity","goodsUV","activityUV","orderTransform","orderCount","payTransform","payOne","aveGmv","gmv"],x=a(95),P=a.n(x),T=function(e){var t=e.submitFile,a=e.btnText,c=void 0===a?"Submit File":a,l=e.disabled,o=e.showFileList,s=void 0===o||o,m=e.accept,u=void 0===m?".xlsx":m,p=e.showIcon,v=void 0===p||p,w=e.showMargin,b=void 0===w||w,C=e.blankrows,I=void 0!==C&&C,x=Object(n.useState)([]),T=Object(i.a)(x,2),U=T[0],O=T[1],G={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authoriztion:"authorization-text"},accept:u,onChange:function(e){if("removed"!==e.file.status){if(e.fileList.length>1)return f.a.error("only can upload one file"),!1;var a=e.fileList;if(a=a.slice(-1),["done","error"].includes(e.file.status))"error"===e.file.status&&f.a.error("".concat(e.file.name," file upload failed."));else{var n=e.file,r=n.originFileObj,c=n.name,l=new FileReader;l.onload=function(e){var a=e.target.result,n=P.a.read(a,{type:"binary"}).Sheets,r=[];for(var l in n)r=r.concat(P.a.utils.sheet_to_json(n[l],{defval:"",raw:!1,range:0,blankrows:I}));!function(e,a){var n=e;n=(n=(e||[]).map((function(e){return Object.keys(e).reduce((function(t,a){return t[a]=e[a].trim(),t}),{})}))).filter((function(e){return Object.values(e).some((function(e){return e}))})),t(n,a)}(function(e,t){var a=[],n="roles.xlsx"===t?N:y;return e.forEach((function(e){var t={};Object.keys(e).forEach((function(a){var r=n[a.split("\n")[0].trim()].type||a.split("\n")[0].trim(),c=e[a];t[r]=c})),a.push(t)})),a}(r,c),c)},l.readAsBinaryString(r),a[0].status="done"}"uploading"===e.file.status||s?O(Object(g.a)(e.fileList)):O([])}}};return s||(G.fileList=U),r.a.createElement(E.a,G,r.a.createElement(d.a,{style:{marginLeft:b?16:0},disabled:l},v&&r.a.createElement(h.a,{type:"upload"})," ",c))},U=(a(303),"table-generate"),O=function(e){var t=e.data;return t.splice(0,0,t[t.length-1]),t.pop(-1),r.a.createElement("div",{className:U},r.a.createElement("div",{className:"".concat(U,"-title")},r.a.createElement("div",null,"\u767b\u5f55\u4eba\u6570"),r.a.createElement("div",null,"\u6b21\u65e5\u7559\u5b58\u7387")),r.a.createElement("div",{className:"".concat(U,"-table")},r.a.createElement("div",{className:"".concat(U,"-tip")},w.map((function(e,t){return r.a.createElement("div",{key:t,className:"".concat(U,"-role-title")},e.title)}))),r.a.createElement("div",{className:"".concat(U,"-content")},t&&t.length>0&&t.map((function(e,t){return r.a.createElement("div",{className:"".concat(U,"-item"),key:t},r.a.createElement("div",{className:"".concat(U,"-current")},e.currentLoginPerson_1),r.a.createElement("div",{className:"".concat(U,"-past")},"\u4e0a\u5468 ".concat(e.currentLoginPerson)),r.a.createElement("div",{className:"".concat(U,"-rate")},r.a.createElement("span",{className:"".concat(U,"-change"),"data-show":parseInt(e.UVChange,10)>0?"1":"0"},e.UVChange),r.a.createElement("span",{"data-show":parseInt(e.UVChangePercent,10)>0?"1":"0"},e.UVChangePercent)))}))),r.a.createElement("div",{className:"".concat(U,"-content-login")},t&&t.length>0&&t.map((function(e,t){return r.a.createElement("div",{className:"".concat(U,"-item"),key:t},r.a.createElement("div",{className:"".concat(U,"-current")},e.nextKeepPercent_1),r.a.createElement("div",{className:"".concat(U,"-past")},"\u4e0a\u5468 ".concat(e.nextKeepPercent)),r.a.createElement("div",{className:"".concat(U,"-rate")},r.a.createElement("span",{"data-show":parseInt(e.nextKeepPercentChange,10)>0?"1":"0"},e.nextKeepPercentChange)))})))))},G=(a(304),function(e){var t=e.data,a={};t.filter((function(e){return b.includes(e.date)})).map((function(e){return function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return Object.keys(t).forEach((function(r){r===n?e(t[r],a,n):a.includes(r)||delete t[r]})),t}(e,I)})).forEach((function(e){a[C[e.date]]=e}));var n=a[9],c=a[18],l=a[19],o=a[20];return console.log(c),r.a.createElement("div",{className:"funnel-generate"},a&&a[9]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat("funnel-generate","-header")},r.a.createElement("div",{className:"".concat("funnel-generate","-mid")},r.a.createElement("div",{className:"".concat("funnel-generate","-mid-title")},"\u5230\u8fbe\u5546\u54c1\u9875 ".concat(c.arriveGoods)),r.a.createElement("div",null,r.a.createElement("p",null,"\u4e0a\u5468".concat(n.arriveGoods)),r.a.createElement("span",{"data-show":parseInt(o.arriveGoods,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},o.arriveGoods))),r.a.createElement("div",{className:"".concat("funnel-generate","-mid")},r.a.createElement("div",{className:"".concat("funnel-generate","-mid-title")},"\u5230\u8fbe\u4f1a\u573a ".concat(c.arriveActivity)),r.a.createElement("div",null,r.a.createElement("p",null,"\u4e0a\u5468".concat(n.arriveActivity)),r.a.createElement("span",{"data-show":parseInt(o.arriveActivity,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},o.arriveActivity)))),r.a.createElement("div",{className:"".concat("funnel-generate","-goods")},r.a.createElement("div",{className:"".concat("funnel-generate","-goods-wrapper")},r.a.createElement("div",{className:"".concat("funnel-generate","-goods-content")},r.a.createElement("div",{className:"".concat("funnel-generate","-goods-uv")},r.a.createElement("div",{className:"".concat("funnel-generate","-goods-title")},"\u5546\u54c1\u8be6\u60c5UV"),r.a.createElement("div",{className:"".concat("funnel-generate","-goods-count")},r.a.createElement("div",{className:"".concat("funnel-generate","-title")},c.goodsUV),r.a.createElement("div",null,"\u4e0a\u5468 ".concat(n.goodsUV)))),r.a.createElement("div",{className:"".concat("funnel-generate","-meeting-uv")},r.a.createElement("div",{className:"".concat("funnel-generate","-goods-title")},"\u4f1a\u573aUV"),r.a.createElement("div",{className:"".concat("funnel-generate","-meeting-count")},r.a.createElement("div",{className:"".concat("funnel-generate","-title")},c.activityUV),r.a.createElement("div",null,"\u4e0a\u5468 ".concat(n.activityUV))))))),r.a.createElement("div",{className:"".concat("funnel-generate","-mid")},r.a.createElement("div",{className:"".concat("funnel-generate","-mid-title")},"\u4e0b\u5355\u8f6c\u5316 ".concat(c.orderTransform)),r.a.createElement("div",null,r.a.createElement("p",null,"\u4e0a\u5468".concat(n.orderTransform)),r.a.createElement("span",{"data-show":parseInt(l.orderTransform,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},l.orderTransform),r.a.createElement("span",{"data-show":parseInt(o.orderTransform,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},o.orderTransform))),r.a.createElement("div",{className:"".concat("funnel-generate","-order")},r.a.createElement("div",{className:"".concat("funnel-generate","-order-wrapper")},r.a.createElement("div",{className:"".concat("funnel-generate","-order-content")},r.a.createElement("div",{className:"".concat("funnel-generate","-title")},"\u4e0b\u5355\u4eba\u6570 ".concat(c.orderCount)),r.a.createElement("p",null,"\u4e0a\u5468 ".concat(n.orderCount)),r.a.createElement("span",{"data-show":parseInt(l.orderCount,10)>0?"1":"0",className:"".concat("funnel-generate","-order-span")},l.orderCount),r.a.createElement("span",{"data-show":parseInt(o.orderCount,10)>0?"1":"0",className:"".concat("funnel-generate","-order-span")},o.orderCount)))),r.a.createElement("div",{className:"".concat("funnel-generate","-mid")},r.a.createElement("div",{className:"".concat("funnel-generate","-mid-title")},"\u652f\u4ed8\u8f6c\u5316 ".concat(c.payTransform)),r.a.createElement("div",null,r.a.createElement("p",null,"\u4e0a\u5468".concat(n.payTransform)),r.a.createElement("span",{"data-show":parseInt(l.payTransform,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},l.payTransform),r.a.createElement("span",{"data-show":parseInt(o.payTransform,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},o.payTransform))),r.a.createElement("div",{className:"".concat("funnel-generate","-pay")},r.a.createElement("div",{className:"".concat("funnel-generate","-pay-wrapper")},r.a.createElement("div",{className:"".concat("funnel-generate","-pay-content")},r.a.createElement("div",{className:"".concat("funnel-generate","-title")},"\u4ed8\u6b3eUV ".concat(c.payOne)),r.a.createElement("p",null,"\u4e0a\u5468 ".concat(n.payOne)),r.a.createElement("span",{"data-show":parseInt(l.payOne,10)>0?"1":"0",className:"".concat("funnel-generate","-pay-span")},l.payOne),r.a.createElement("span",{"data-show":parseInt(o.payOne,10)>0?"1":"0",className:"".concat("funnel-generate","-pay-span")},o.payOne)))),r.a.createElement("div",{className:"".concat("funnel-generate","-mid")},r.a.createElement("div",{className:"".concat("funnel-generate","-mid-title")},"\u4eba\u5747GMV ".concat(c.aveGmv)),r.a.createElement("div",null,r.a.createElement("p",null,"\u4e0a\u5468".concat(n.aveGmv)),r.a.createElement("span",{"data-show":parseInt(o.aveGmv,10)>0?"1":"0",className:"".concat("funnel-generate","-mid-span")},o.aveGmv))),r.a.createElement("div",{className:"".concat("funnel-generate","-gmv")},r.a.createElement("div",{className:"".concat("funnel-generate","-gmv-wrapper")},r.a.createElement("div",{className:"".concat("funnel-generate","-gmv-content")},r.a.createElement("div",{className:"".concat("funnel-generate","-title")},"GMV ".concat(c.gmv)),r.a.createElement("p",null,"\u4e0a\u5468 ".concat(n.gmv)),r.a.createElement("span",{"data-show":parseInt(o.gmv,10)>0?"1":"0",className:"".concat("funnel-generate","-gmv-span")},o.gmv),r.a.createElement("span",{"data-show":parseInt(o.gmv,10)>0?"1":"0",className:"".concat("funnel-generate","-gmv-span")},o.gmv))))))}),V=(a(305),function(){var e=s.a.Header,t=s.a.Footer,a=s.a.Content,c=s.a.Sider,l=Object(n.useState)(!1),o=Object(i.a)(l,2),u=o[0],g=o[1],f=Object(n.useState)([]),E=Object(i.a)(f,2),h=E[0],y=E[1],N=Object(n.useState)(""),w=Object(i.a)(N,2),b=w[0],C=w[1];return r.a.createElement(s.a,{style:{minHeight:"100vh"}},r.a.createElement(e,{className:"".concat("month-paper","-header")},"\u5927\u732a\u8e44\u5b50"),r.a.createElement(s.a,null,r.a.createElement(c,{width:80,className:"".concat("month-paper","-sider")},r.a.createElement(m.a,{defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(m.a.Item,{key:"1"},r.a.createElement("span",null,"\u751f\u6210")))),r.a.createElement(a,{style:{margin:"0 16px"}},r.a.createElement("div",{className:"".concat("month-paper","-file")},r.a.createElement(T,{btnText:"Submit File",submitFile:function(e,t){return e?(g(!0),C(t),y(e)):g(!1),e}}),u&&("roles.xlsx"===b?r.a.createElement("div",{id:"table"},r.a.createElement(O,{data:h})):r.a.createElement("div",{id:"funnel"},r.a.createElement(G,{data:h})))),r.a.createElement("div",{className:"".concat("month-paper","-generate")},r.a.createElement(d.a,{type:"primary",block:!0,onClick:function(){var e="roles.xlsx"===b?"table":"funnel",t=document.getElementById(e),a=t.offsetWidth,n=t.offsetHeight,r=document.createElement("canvas");r.width=4*a,r.height=5*n,r.getContext("2d").scale(2,2),p()(t,{scale:2,canvas:r,width:r.width,height:r.height}).then((function(e){var t=e.getContext("2d");t.mozImageSmoothingEnabled=!1,t.webkitImageSmoothingEnabled=!1,t.msImageSmoothingEnabled=!1,t.imageSmoothingEnabled=!1,t.scale(2,2),v.saveAsPNG(e,e.width,e.height)}))},disabled:!u},"\u751f\u6210")))),r.a.createElement(t,{style:{textAlign:"center"}},"\u5927\u7f8e\u599e \xa92020 Created by NiuNiu"))}),j=function(){return r.a.createElement(o.a,null,r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[157,1,2]]]);
//# sourceMappingURL=main.1b0fc2c4.chunk.js.map