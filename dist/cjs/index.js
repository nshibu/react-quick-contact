"use strict";var e=require("react");function n(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===r&&t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}n(".c2c_btn_icon{\r\n    height: 20px;\r\n    width: 20px;    \r\n}\r\na{\r\n    text-decoration: none !important;\r\n}");n(".c2c_wrapper {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  z-index: 9999;\r\n}\r\n\r\n.c2c_popover {\r\n  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;\r\n  max-width: 250px;\r\n  padding: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  transition: all 0.2s ease-in-out;\r\n  background-color: #fff;\r\n  color: black;\r\n}\r\n\r\n.c2c_designation {\r\n  font-size: 13px;\r\n}\r\n.c2c_profile {\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 100%;\r\n}\r\n.c2c_container {\r\n  padding: 10px 20px;\r\n  border-radius: 25px;\r\n  background: #1e96f2;\r\n  color: #ffffff;\r\n  z-index: 999999;\r\n  cursor: pointer;\r\n  width: max-content;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  -webkit-user-select: none; /* Safari */\r\n  -ms-user-select: none; /* IE 10 and IE 11 */\r\n  user-select: none; /* Standard syntax */\r\n}\r\n\r\n.c2c_chat {\r\n  height: 24px;\r\n  width: 24px;\r\n}\r\n.c2c_btn_icon{\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.c2c_btn {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.c2c_left {\r\n  left: 50px;\r\n  align-items: flex-start;\r\n}\r\n.c2c_right {\r\n  right: 50px;\r\n  align-items: flex-end;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .c2c_wrapper {\r\n    bottom: 10px;\r\n  }\r\n  .c2c_left {\r\n    left: 10px;\r\n  }\r\n  .c2c_right {\r\n    right: 10px;\r\n  }\r\n}\r\n");exports.QCButton=n=>{const[r,t]=e.useState(!1),c={display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",backgroundColor:r?n.color:n.bgColor,color:r?"#ffffff":n.color,fontWeight:"bold",padding:"10px 0",borderRadius:"20px",transiton:"all .2s ease-in-out"},a=()=>t(!r);return e.createElement("a",{href:n.href,style:c,onMouseEnter:a,onMouseLeave:a},n.icon&&e.createElement("span",{className:"c2c_btn_icon"},n.icon),e.createElement("span",null," ",n.name))},exports.ReactQuickContact=n=>{const[r,t]=e.useState(!0);return e.createElement("div",{className:"c2c_wrapper "+("right"===n.alignment?"c2c_right":"c2c_left")},r&&e.createElement("div",{className:"c2c_popover"},e.createElement("img",{className:"c2c_profile",src:n.profileImageUrl,alt:"Profile"}),n.name&&e.createElement("div",{className:"c2c_name"},n.name),n.designation&&e.createElement("div",{className:"c2c_designation"},n.designation),n.message&&e.createElement("div",null,n.message),n.buttons&&n.buttons.map(((n,r)=>e.createElement("div",{key:r,className:"c2c_btn"}," ",e.createElement(e.Fragment,null,n))))),e.createElement("div",{className:"c2c_container",onClick:()=>{t(!r)}},e.createElement("div",{className:"c2c_btn_icon"},"  ",n.buttonIcon),e.createElement("div",null,"  ",n.buttonLabel)))};
//# sourceMappingURL=index.js.map
