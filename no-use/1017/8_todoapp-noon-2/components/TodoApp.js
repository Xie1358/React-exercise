import React from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

class TodoApp extends React.Component{
  constructor(){
    super()
    this.state = {
     inputText:'',
     //{id: number, text: string}
     todos: [
         {id: 1, text: 'buy iphone 11'},
         {id: 2, text: 'learn react'}
        ]
    }
  }

  handleTextChange=(event) => {
    this.setState({ inputText: event.target.value })
  }

  handleTextKeyPress=(event) => {

    if(event.target.value && event.key === 'Enter'){
        // 建立新項目
        const newTodo = {
            id: +new Date(),
            text: event.target.value
        }

        // 加到陣列中
        this.setState({
            todos: [newTodo, ...this.state.todos]
        })

        // 清空文字輸入框
        this.setState({ inputText: '' })
    }
  }


  render(){
     return (
      <>
        <h1>TodoApp</h1>
        <TodoAddForm  
         value={this.state.inputText}
         onChange={this.handleTextChange}
         onKeyPress={this.handleTextKeyPress}/>
        <TodoList todos={this.state.todos}/>
      </>
    )
  }
 
}

export default TodoApp