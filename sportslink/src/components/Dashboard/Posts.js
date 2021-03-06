import React from 'react'
import PostCard from './PostCard'
import {uid} from 'react-uid'
import './posts.css'

class Posts extends React.Component{

    render(){
        return <div className="posts">
            {this.props.posts.map((post) => {
              return <PostCard history={this.props.history} key={uid(post)} user={this.props.user} newComment={this.props.newComment} value={this.props.posts.indexOf(post)} upvote={this.props.upvote} post={post}/>
            }
            )}
        </div>
    }
}

export default Posts