'use client'
import React from 'react'

function Todo({ item, deleteTodoFunc }) {
    return (
        <li>
            <p>{item}</p>
            <button onClick={() => deleteTodoFunc(item)}>delete</button>
        </li>

    )
}
export default Todo