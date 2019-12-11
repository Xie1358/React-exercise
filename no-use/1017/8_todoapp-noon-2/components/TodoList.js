import React from 'react'

const TodoList = ({todos}) =>  (
    <>
      {/* 直接展開所有的由上層父母元件的 props */}
      <ul>
         {todos.map((value, index) => {
                return <li key={value.id}>{value.text}</li>
         })}
      </ul>
    </>
)

export default TodoList