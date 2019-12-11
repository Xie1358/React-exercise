import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }
// 異步轉同步
  handleToggle = async () => {
   await this.setState({ toggle:!this.state.toggle }) 

    alert('after setState :'+this.state.toggle)
  }

  render(){
     return (
      <>
        <div onClick={this.handleToggle}>
          {(this.state.toggle)?'燈 亮 '+this.state.toggle:'燈 暗 '+this.state.toggle}
        </div>
      </>
    )
  }
 
}

export default App