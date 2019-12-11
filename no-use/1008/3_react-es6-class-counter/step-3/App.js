import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }
// next.js 前端熱門工具 箭頭函式是函式表達式簡寫法 花括號內只能寫表達式(在jsx語法 插入js語法表達式)
// 28行 因為在類別裡所以要加this 代表這個類別的函式
//addEventListener 第一個傳入的參數是事件 第二個是事件觸發的函式,因為元件是狀態機器 所以是個函式在處理狀態
// JS裡er或or結尾的都是函式 通常是什麼者(監聽者)或什麼器(狀態機器)
//react自創的這些假的onClick相當於 addEventListener('click',function(){...}) 的click
// handleClick=(value) =>()=>{ //react不會綁定 所以要用()=>自己綁定 10/08
  handleClick = value => {  //react不會綁定 所以要用()=>自己綁定
    this.setState({
      total: this.state.total + value,
    })
  }

  render() {
      // onClick按下後才執行 , ()=> 相當於等一下 按了才執行this.handleClick(1) 目的:重複利用
    // () => 相當於植物人躺在醫院就要插管 因為現在沒辦法治療 管子拿掉就活不了 管子拿掉要用15行寫法
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={() => this.handleClick(1)}>+</button>
        <button onClick={() => this.handleClick(-1)}>-</button>
      </>
    )
  }
}

export default App
