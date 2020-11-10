import React from 'react'

class Comment extends React.Component{
    handleClick = () => {
        if (this.props.clickProfile !== false){
            window.location.href = '/viewprofile/' + this.props.comment.user.username
        }
        
    }

    render(){
        return <div className="comment">

            <div className="commentPic" onClick={this.handleClick}>
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