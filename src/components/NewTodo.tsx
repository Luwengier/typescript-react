import React, { useRef } from 'react'

interface NewTodoProps {
  createTodoHandler(newTodo: string): void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const enteredText = textInputRef.current!.value
    props.createTodoHandler(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>

      <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default NewTodo
