'use client'
import React, { useEffect } from 'react'
import { fetchStore } from '../../store/index'

function Fetch() {
    const { fetchPost, posts } = fetchStore(
        state => ({
            posts: state.posts,
            fetchPost: state.fetchPost
        })
    )

    // useEffect kullanılmadıgında arkada sürekli bir istek atıyor. Bu sayade önlemiş olduk.
    useEffect(() => {
        fetchPost()
    }, [])


    return (
        <>
            <h3>Fetch ile istek atma</h3>
            <ul>
                {posts &&
                    posts.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Fetch
