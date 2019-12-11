import React from 'react'

class TodoAddForm extends React.Component {
  constructor(){
    super()
    this.state = {
    }

  }


  render(){
    // 觀察props 
    console.log(this.props)
     return (
      <>
      {/* 直接展開所有的由上層父母元件的 props */}
       <input type="text" {...this.props} />
       {/* 以下寫法同上 元件即函式的概念 */}
       {/* <input type="text" 
         value={this.state.inputText}
         onChange={this.handleTextChange}
         onKeyPress={this.handleTextKeyPress}/> */}
      </>
    )
  }
 
}

export default TodoAddForm