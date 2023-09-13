'use client'
import React, { useEffect, useState } from 'react'
import { todoStore } from '@/store'
import Todo from './Todo'
import styles from './Todo.module.css'


function Page() {
  const { addTodo, deleteTodo, todo, value, setValue } = todoStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const formSubmit = (e) => {
    e.preventDefault()
    addTodo()
    setValue('')
  }

  const deleteTodoFunc = (name) => {
    const deleteFilter = todo.filter(item => item !== name)
    deleteTodo(deleteFilter)
  }

  return (
    <div className={styles.todo}>
      <h2>Todo List</h2>

      <form onSubmit={(e) => (formSubmit(e))}>
        <input maxLength='50' value={value} onChange={e => setValue(e.target.value)} placeholder='text..' />
        <button>Add</button>
      </form>

      <ul>
        {isClient ? todo &&
          todo.map((item, index) => (
            <Todo key={index} item={item} deleteTodoFunc={deleteTodoFunc}>{item}</Todo>
          )) : ''}
      </ul>

    </div>
  )
}

export default Page