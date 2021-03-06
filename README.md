# Unnotech Frontend Engineer 徵才小專案

## 開啟方法
```
Vue Cli
$ npm run serve
or https://kcl9503.github.io/booksProject/
```

## 架構與邏輯
```
Axios
先在utils folder，request.js內建立axios，設定baseURL省去多餘複寫網址部分，
在api folder，index.js做各個API分配，以簡化主頁中獲取資料的code，
最後將index.js引入main.js，以保持main.js整潔。
Router
使用vue-router進行網址設定
```

## 第三方 library 的理解，以及為何使用它
```
上述兩個library以外，就只有引入一些UI，
為了快速開發兼具美觀與動畫特效，
使用到BootstrapVue, Vuetify, Element-UI三個，
因為他們只有具備其中一兩樣我需要的畫面，
只好使用三個湊齊我要的效果。
```

## 在這份專案中你遇到的困難、問題，以及解決的方法
```
最讓人頭痛的地方還是在畫面呈現上，
排版整齊、過場動畫添加加上時間有限，
只好找好幾個套版，一個一個篩選，
寫一個覺得不妥又整個拿掉重寫，
過程大概重複三次，
串接API反而事小，
使用框架在處理撈出來的資料及渲染基本上快原生JS許多，
加上資料不複雜，
無需做任何處理即可使用
```