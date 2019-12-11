import React from 'react'
import Light from './components/Light'
import LightFunc from './components/LightFunc'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      toggleOne: false  // App.js又叫容器(最外層 所有狀態放容器 一層一層傳給子元件) 是有狀態元件
    }
  }
// 此法必學 最基本 就傳過去接住而已
  handleToggle = () => {
    this.setState({ toggleOne:!this.state.toggleOne })
  }


  render(){
     return (
      <>
        <Light/>

        <Light 
        color="gold"
        status={this.state.toggleOne} 
        onClick={this.handleToggle}  // onClick當成函式物件往下傳 傳給子女元件
        />

        {/* <LightFunc/> */}
      </>
    )
  }
 
}

export default App