import React from 'react'
import $ from 'jquery'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }

  componentDidMount(){
    $('#switch').click(function(){
      $('.light').toggle()
    })
  }

  render(){
     return (
      <>
        <div onClick={()=>{ 
          this.setState({ toggle:!this.state.toggle }) 
          }}>
          {(this.state.toggle)?'燈 亮':'燈 暗'}
        </div>
        <div id="switch">
          <div className="light">燈 亮</div>
          <div className="light" style={{ display: 'none' }}>燈 暗</div>
        </div>
      </>
    )
  }
 
}

export default App