import React from 'react'
import Light from './components/Light'
import LightFunc from './components/LightFunc'

class App extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        <Light/>
        <Light color="gold"/>
        <LightFunc color="tomato"/>
      </>
    )
  }
 
}

export default App