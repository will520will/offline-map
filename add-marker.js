// add-marker.js

// 进入标记模式
function enterMarkMode(map) {
    // 添加交互样式并设置标记模式状态
    document.body.classList.add("mark-mode");
    // 将按钮文本更改为“退出标记模式”
    markButton.innerHTML = "退出标记模式";
    // 添加“click”事件来向地图中添加标记
    map.on("click", addMarker);
  }
  
  // 退出标记模式
  function exitMarkMode(map) {
    // 删除交互样式并设置标记模式状态
    document.body.classList.remove("mark-mode");
    // 将按钮文本更改为“添加标记”
    markButton.innerHTML = "添加标记";
    // 删除向地图中添加标记的“click”事件
    map.off("click", addMarker);
  }
  
  // 创建计数器
  var markerCount = 0;
  
  // 添加标记
  function addMarker(e) {
    // 增加计数器并获取唯一的标记ID
    var markerId = "tab" + ++markerCount;
    // 创建marker并设置图标和可拖动
    var marker = L.marker(e.latlng, {
      icon: L.icon({
        iconUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -50]
      }),
      draggable: true
    });
    // 设置popup弹框的内容
    var popupContent =
      "纬度：" + e.latlng.lat + "<br>经度：" + e.latlng.lng;
    // 显示popup弹框
    marker.bindPopup(popupContent).openPopup();
    // 设置工具提示内容（marker名称）
    var markerName = "标记 " + markerId;
    // 绑定工具提示并添加marker到FeatureGroup
    marker.addTo(drawnItems).bindTooltip(markerName, {
      permanent: false,
      direction: "bottom"
    });
  }
  