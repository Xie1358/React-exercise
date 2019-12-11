import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 999,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button>+</button>
        <button>-</button>
      </>
    )
  }
}

export default App
