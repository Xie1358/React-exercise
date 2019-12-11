import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }
// toggle:!this.state.toggle執行完才呼叫 ()=>{...} js設計來處理異步語法樣式叫CPS(連續性傳遞風格)
  handleToggle = () => {
    this.setState({ toggle:!this.state.toggle }, ()=>{
      alert('in setState callback :'+this.state.toggle)
    }) 

    // alert('after setState :'+this.state.toggle)
  }

  render(){
     return (
      <>
        <div onClick={this.handleToggle}>
          {(this.state.toggle)?'燈 亮':'燈 暗'}
        </div>
      </>
    )
  }
 
}

export default App