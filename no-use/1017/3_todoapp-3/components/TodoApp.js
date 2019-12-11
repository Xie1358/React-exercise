import React from 'react'

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

  render(){
     return (
      <>
        <h1>TodoApp</h1>
        <input type="text"
         value={this.state.inputText}
         onChange={this.handleTextChange}
        />
        <ul>
            {this.state.todos.map((value, index) => {
                return <li key={value.id}>{value.text}</li>
            })}
        </ul>
      </>
    )
  }
 
}

export default TodoApp