import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

function Headers() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href={'/todo-list'}>Todo List App</Link>
                <Link href={'/counter'}>Counter App</Link>
                <Link href={'/fetch'}>Fetch</Link>
            </nav>
        </header>
    )
}

export default Headers