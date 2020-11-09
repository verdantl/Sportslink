import React from 'react'
import PostCard from './PostCard'
import {uid} from 'react-uid'
import './posts.css'

class Posts extends React.Component{
    render(){
        return <div className="posts">
            {this.props.posts.map((post) => {
              return <PostCard key={uid(post)} post={post}/>
            }
            )}
        </div>
    }
}

export default Posts