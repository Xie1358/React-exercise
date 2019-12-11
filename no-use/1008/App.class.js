import React from 'react'

class App extends React.Component {
  constructor() {  //物件導向的建構式
    super()  // 建構式第一行必須呼叫super
    this.state = {}  // constructor裡可定義state(物件)
  }

  render() { // 函式型元件的回傳值相當於類別型元件的render的回傳值
    return (
      <>
        <h1>9999</h1>
      </>
    )
  }
}

export default App
