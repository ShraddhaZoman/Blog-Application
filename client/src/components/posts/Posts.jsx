import Post from '../post/Post'
import React from 'react'
import "./posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p)=>(
         <Post key={p.id} post={p} />
      ))}
        </div>
  )
}
