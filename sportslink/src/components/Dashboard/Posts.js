import React from 'react'
import PostCard from './PostCard'
import {uid} from 'react-uid'
import './posts.css'

class Posts extends React.Component{

    render(){
        return <div className="posts">
            {this.props.posts.map((post) => {
              return <PostCard key={uid(post)} user={this.props.user} value={this.props.posts.indexOf(post)} upvote={this.props.upvote} post={post}/>
            }
            )}
        </div>
    }
}

export default Posts