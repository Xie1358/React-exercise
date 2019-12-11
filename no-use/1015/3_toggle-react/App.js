import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }

  render(){
     return (
      <>
        <div onClick={()=>{ 
          this.setState({ toggle:!this.state.toggle }) 
          }}>
          {(this.state.toggle)?'燈 亮':'燈 暗'}
        </div>
      </>
    )
  }
 
}

export default App