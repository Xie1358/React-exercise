import React from 'react'

class TodoApp extends React.Component{
  constructor(){
    super()
    this.state = {
        text: {
            inputText:'',
            nameText:'',
        },
        //{id: number, text: string}
        todos: [
            {id: 1, text: 'buy iphone 11'},
            {id: 2, text: 'learn react'}
            ]
        }
  }

  // 多個表單元素使用同一個獲取值的方法
  handleTextChange = (event) => {
      // ES2018(ES9) Object Initializer 物件展開運算符
    this.setState({ text: {
        ...this.state.text, // 沒把物件值展開 輸入某欄另一欄state會不見
        [event.target.name]: event.target.value
     }
    })
  }

  handleClick = (event) => {
   
        // 建立新項目
        const newTodo = {
            id: +new Date(),
            text: this.state.text.nameText+': '+this.state.text.inputText
        }

        // 加到陣列中
        this.setState({
            todos: [newTodo, ...this.state.todos]
        })

        // 清空文字輸入框
        this.setState({ text: {inputText: ''} })
        this.setState({ text: {inputText: ''} })
    
  }


  render(){
     return (
      <>
        <h1>TodoApp</h1>
        姓名:
        <input type="text"
         value={this.state.text.nameText}
         onChange={this.handleTextChange}
         name="nameText"
        />
        <br/>
        作啥？
        <input type="text"
         value={this.state.text.inputText}
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