import React from 'react'
import {uid} from 'react-uid'
import Comment from './Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton'

class PostCard extends React.Component{
    render(){
        return <div className="postCard">
            <div className="postInfo">
            <div className="posterInfo">
                <div className="posterPic">
                <img src={this.props.post.user.image}></img>
                </div>
                <div className='posterName'>
                {this.props.post.user.name}
                </div>
            </div>
            <div className="postText">
                {this.props.post.text}
            </div>
            </div>

            <div className="postIntermediary">
            <span> {this.props.post.likes + " Likes"} </span>
            <span>
                {this.props.post.comments.length + " Comments"}
            </span>
                <IconButton className="thumbsUpButton"> <ThumbUpIcon className="thumbsUp"/></IconButton>

            </div>

            <div className="comments">
            {this.props.post.comments.map((comment) => {
              return <Comment key={uid(comment)} comment={comment}/>
            }
            )}

            </div>
            <input className="commentInput" placeholder="Add New Comment"/>

        </div>
    }
}

export default PostCard