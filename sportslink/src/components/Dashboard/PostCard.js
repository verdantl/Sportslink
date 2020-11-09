import React from 'react'
import {uid} from 'react-uid'
import Comment from './Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton'

class PostCard extends React.Component{
    state ={
        hideComments: true  
    }
    alterComments = (event) =>{
        this.setState({hideComments: !this.state.hideComments})
    }

    commentMessage = () => {
        if (this.state.hideComments){
            return "Show Comments"
        }
        else{
            return "Hide Comments"
        }
    }

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
                <div>
            <span> {this.props.post.likes + " Likes"} </span>
            <span>
                {this.props.post.comments.length + " Comments"}
            </span>
                <IconButton className="thumbsUpButton"> <ThumbUpIcon className="thumbsUp"/></IconButton>
                </div>

            </div>
            <input className="commentInput" placeholder="Add New Comment"/>

            <div className="comments" hidden={this.state.hideComments}>
            {this.props.post.comments.map((comment) => {
              return <Comment key={uid(comment)} comment={comment}/>
            }
            )}

            </div>

            <div className="viewComments" onClick={this.alterComments}>
                {this.commentMessage()}
            </div>
        </div>
    }
}

export default PostCard