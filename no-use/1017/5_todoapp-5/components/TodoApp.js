import React from 'react'

class TodoApp extends React.Component{
  constructor(){
    super()
    this.state = {
     inputText:'',
     nameText:'',
     //{id: number, text: string}
     todos: [
         {id: 1, text: 'buy iphone 11'},
         {id: 2, text: 'learn react'}
        ]
    }
  }

  // 多個表單元素使用同一個獲取值的方法
  handleTextChange = (event) => {
    this.setState({ 
        [event.target.name]: event.target.value 
    })
  }

  handleClick = (event) => {
   
        // 建立新項目
        const newTodo = {
            id: +new Date(),
            text: this.state.nameText+': '+this.state.inputText
        }

        // 加到陣列中
        this.setState({
            todos: [newTodo, ...this.state.todos]
        })

        // 清空文字輸入框
        this.setState({ inputText: '', nameText: '' })
    
  }


  render(){
     return (
      <>
        <h1>TodoApp</h1>
        姓名:
        <input type="text"
         value={this.state.nameText}
         onChange={this.handleTextChange}
         name="nameText"
        />
        <br/>
        作啥？
        <input type="text"
         value={this.state.inputText}
         onChange={this.handleTextChange}
         name="inputText"
        />
        <br/>
        <button onClick={this.handleClick}>加入</button>
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