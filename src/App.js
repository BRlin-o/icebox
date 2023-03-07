import React from 'react';
import './App.css';
import { isMobile } from 'react-device-detect';

// // 定義兩個不同的圖片路徑
// const mobileImage = require('./assets/mobile.png');
// const desktopImage = require('./assets/desktop.png');

import mobileImage from './assets/mobile.png';
import desktopImage from './assets/desktop.png';

const App = () => {

  // 定義兩個不同的圖片路徑
  // const mobileImageUrl = '/assets/mobile.png';
  // const desktopImageUrl = '/assets/desktop.png';
  // 根據設備類型選擇要顯示的圖片
  // const backgroundImageUrl = isMobile ? mobileImageUrl : desktopImageUrl;

  const backgroundImage = isMobile ? mobileImage : desktopImage;

  let backgroundImageStyle = {
    height: '100vh', // 設置背景圖片的高度為 100vh
    backgroundImage: `url(${backgroundImage})`, // 使用變數作為背景圖片的路徑
    backgroundRepeat: 'no-repeat', // 設置背景圖片不重複
    backgroundPosition: 'center center', // 設置背景圖片的位置為中央
    backgroundSize: 'contain', // 設置背景圖片的大小為包含，這樣就不會拉伸
    backgroundAttachment: 'fixed', // 設置背景圖片的附著方式為固定
  };

  return <div style={backgroundImageStyle}></div>; // 使用 div 標籤來顯示背景圖片，並且使用樣式變數

  // return <img className="background-image" src={image} alt="Working!" />;
};

export default App;