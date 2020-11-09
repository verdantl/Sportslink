import React from 'react'
import AdminPostCard from './AdminPostCard'
import {uid} from 'react-uid'
import '../Dashboard/posts.css'

class AdminPosts extends React.Component{
    render(){
        return <div className="posts">
            {this.props.posts.map((post) => {
              return <AdminPostCard key={uid(post)} removePost={this.props.removePost} value={this.props.posts.indexOf(post)} post={post}/>
            }
            )}
        </div>
    }
}

export default AdminPosts