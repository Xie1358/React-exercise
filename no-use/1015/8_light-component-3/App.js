import React from 'react'
import Light from './components/Light'

class App extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
     return (
      <>
        <Light/>
        <Light/>
        <Light color="gold"/>
        <Light color="green"/>
      </>
    )
  }
 
}

export default App