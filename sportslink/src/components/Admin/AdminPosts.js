import React from 'react'
import AdminPostCard from './AdminPostCard'
import {uid} from 'react-uid'
import ReactLoading from 'react-loading'
import '../Dashboard/posts.css'

class AdminPosts extends React.Component{


    render(){
        console.log(this.props)
        return <div className="posts">
            <div hidden={this.props.hideLoading}>
                <ReactLoading type={'spinningBubbles'} color={'black'} className='loadingAnimation'/>
                </div>
            {this.props.posts.map((post) => {
              return <AdminPostCard key={uid(post)} removePost={this.props.removePost} post={post} clickProfile={this.props.clickProfile}/>
            }
            )}
        </div>
    }
}

export default AdminPosts