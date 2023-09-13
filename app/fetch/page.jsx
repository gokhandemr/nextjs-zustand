'use client'
import React, { useEffect } from 'react'
import { fetchStore } from '../../store/index'
import styles from './Fetch.module.css'

function Page() {
  const { fetchPost, posts } = fetchStore(
    state => ({
      posts: state.posts,
      fetchPost: state.fetchPost
    })
  )

  // useEffect kullanılmadıgında arkada sürekli bir istek atıyor. Bu sayade önlemiş olduk.
  // useEffect(() => {
  //   fetchPost()
  // }, [])


  return (
    <div className={styles.fetch}>
      <h3>Fetching</h3>
      {posts.length > 0 ? '' : <button onClick={() => (fetchPost())}>Post List</button>}
      <ul>
        {posts &&
          posts.slice(0, 10).map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Page
