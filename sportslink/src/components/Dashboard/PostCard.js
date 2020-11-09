import React from 'react'
import {uid} from 'react-uid'
import Comment from './Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton'

class PostCard extends React.Component{
    state ={
        message: '',
        hideComments: true,
        upvoted: false,
        thumbsUp: "thumbsUp",
        comments: this.props.post.comments
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

    upvote = () => {
        if (!this.state.upvoted){
            this.setState({upvoted: true, thumbsUp: 'thumbsUpLight'})
            this.props.upvote(this.props.value, 1)
        }

        else{
            this.setState({upvoted: false, thumbsUp: "thumbsUp"})
            this.props.upvote(this.props.value, -1)
        }
    }
    checkChange = (e) => {
        this.setState({
          message: e.target.value
        })
    }   

    submitComment = (e) => {
        if(e.key === 'Enter'){
            this.props.post.comments.push({user: this.props.user, text: this.state.message})
            this.setState({
                message: '',
                comments: this.props.post.comments,
                hideComments: false
            })
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
                <IconButton onClick={this.upvote} className="thumbsUpButton"> <ThumbUpIcon className={this.state.thumbsUp}/></IconButton>
                </div>

            </div>
            <input 
            className="commentInput"
            onKeyPressCapture={this.submitComment}
            onChange={this.checkChange}
            value={this.state.message}
            placeholder="Add New Comment"/>


            <div className="comments" hidden={this.state.hideComments}>
            {this.state.comments.map((comment) => {
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