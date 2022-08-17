import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodoHandler = (newTodoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: newTodoText },
    ])
  }

  return (
    <div className='App'>
      <NewTodo createTodoHandler={createTodoHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
