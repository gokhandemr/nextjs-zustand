'use client'
import { countStore } from '../../store/index'
import React, { useEffect, useState } from 'react'
import styles from './counter.module.css'

function Page() {
    const [isClient, setIsClient] = useState(false)
    const count = countStore((state) => state.count)
    const incCount = countStore((state) => state.incCount)
    const decCount = countStore((state) => state.decCount)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={styles.counter}>
            <h3>Counter App</h3>
            <p>{isClient ? count : 0}</p>
            <button onClick={incCount}>increment</button>
            <button onClick={decCount}>decrement</button>
        </div>
    )
}

export default Page