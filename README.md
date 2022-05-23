# React 簡單介紹

![npm version](https://img.shields.io/badge/npm-v8.10.0-blue) ![node version](https://img.shields.io/badge/node-v16.13.2-blue)

### Intro
[React](https://zh-hant.reactjs.org/)是一個前端的 ”Library” ，**不是框架**，甚至不是web獨有的開發技術，它可以和其他函式庫或套件搭配使用，以在特定環境中渲染，主要目標是最大限度減少開發者建構UI介面時出現的錯誤。

### How to start?
1. CRA (Create React App)
2. Vite
3. Webpack
4. CDN 
5. etc….

### What is JSX?
JSX 語法的重點在於**允許我們在 JS 的檔案中使用 HTML 的標籤，並且使用 JSX 語法建立的是「一個 React 的 element」，此外這樣的標籤語法比起 HTML，更貼近於 JavaScript。**

```javascript
const button = <input type="button" value="Create" className="bg-primary" />

return (
<div>{button}</div>
)
```

### What is Hook？
顧名思義就是一個鉤子，讓你可以利用它來做想做的事情，更簡單明瞭。

#### useState
使用State接受一個參數的最終值，然後會返回一個清單，這就是定義狀態的值和更改它們的方法。中還是要符合規範。

```javascript
const [count, setCount] = useState(0);

setCount(1);

// pure component
setCount((oldVal) => {
	return oldVal += 1; 
})

```

#### useEffect
通過使用這個 Hook，你可以告訴 React 組件需要在渲染後執行某些操作。 React 會保存你傳遞的函數（我們將它稱之為 “effect”），並且在執行 DOM 更新之後調用它。
useEffect接收兩個參數，第一個參數是一個函數，每次渲染就會執行這個函數，第二個參數（非必須）是一個依賴數組，用來控制useEffect的執行。

```javascript
useEffect(() => {
	// do somthing...
} , [])

useEffect(() => {
	// do somthing...
} , [...])

useEffect(() => {
	// do somthing...
})
```


### 可自主學習
- class component不一定要很熟但要看的懂
- 搭配 router 的用法
- vs **Vue** framework
- etc …


### References
- [React 新手入門 - 學習該如何開發 Web | MDN](https://developer.mozilla.org/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [什麼是 JSX? - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10239097)
- [React Hook使用大全，新手入门看这篇够了！ - 掘金](https://juejin.cn/post/7079291631630811172)
