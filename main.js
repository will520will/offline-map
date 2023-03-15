// main.js
// 引入add-marker.js
import { enterMarkMode, exitMarkMode, addMarker } from "./add-marker.js";

// 创建地图、图层和绘制组
const map = L.map("map", {
  center: [39.9, 116.4],
  zoom: 8,
  maxBounds: L.latLngBounds(L.latLng(18, 73.5), L.latLng(54, 135))
});
const layer = L.tileLayer("./img/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 16
}).addTo(map);
const drawnItems = new L.FeatureGroup().addTo(map);

// 获取标记按钮元素
const markButton = document.getElementById("mark-button");

// 添加click事件
markButton.addEventListener("click", function() {
  if (markButton.innerHTML === "添加标记") {
    enterMarkMode(map);
  } else {
    exitMarkMode(map);
  }
});
