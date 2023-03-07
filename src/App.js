import React from 'react';
import { isMobile } from 'react-device-detect';

// 定義兩個不同的圖片路徑
const mobileImage = require('./assets/mobile.png');
const desktopImage = require('./assets/desktop.png');

const App = () => {

  // 根據設備類型選擇要顯示的圖片
  const image = isMobile ? mobileImage : desktopImage;

  // 使用 img 標籤來顯示圖片，並且設置 width 和 height 為 100% 來適應設備尺寸
  return <img src={image} alt="Example" style={{ width: '100%', height: '100%' }} />;
};

export default App;