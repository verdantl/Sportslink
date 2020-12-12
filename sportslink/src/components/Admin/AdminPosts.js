import React from 'react'
import AdminPostCard from './AdminPostCard'
import {uid} from 'react-uid'
import ReactLoading from 'react-loading'
import '../Dashboard/posts.css'

class AdminPosts extends React.Component{


    render(){
        return <div className="posts">
            {this.props.posts.map((post) => {
              return <AdminPostCard key={uid(post)} history={this.props.history} removePost={this.props.removePost} post={post} clickProfile={this.props.clickProfile}/>
            }
            )}
        </div>
    }
}

export default AdminPosts