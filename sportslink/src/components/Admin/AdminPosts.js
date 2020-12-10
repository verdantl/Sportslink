import React from 'react'
import AdminPostCard from './AdminPostCard'
import {uid} from 'react-uid'
import '../Dashboard/posts.css'

class AdminPosts extends React.Component{
    render(){
        console.log(this.props)
        return <div className="posts">
            {this.props.posts.map((post) => {
              return <AdminPostCard key={uid(post)} removePost={this.props.removePost} post={post} clickProfile={this.props.clickProfile}/>
            }
            )}
        </div>
    }
}

export default AdminPosts