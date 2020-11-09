import React from 'react'

class Comment extends React.Component{
    render(){
        return <div className="comment">

            <div className="commentPic">
            <img src={this.props.comment.user.image}/>
            </div>

            <div className="commentText">
            <p className="commentUser">{this.props.comment.user.name}</p>
            <p>  {this.props.comment.text}</p>

            </div>



        </div>
    }
}

export default Comment;