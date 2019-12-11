import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            this.setState({  //改變state一定要用setState,書裡有寫原理,此法有程式碼重複使用問題且onClick內太多東西 眼花撩亂
              total: this.state.total + 1,
            })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              total: this.state.total - 1,
            })
          }}
        >
          -
        </button>
      </>
    )
  }
}

export default App
