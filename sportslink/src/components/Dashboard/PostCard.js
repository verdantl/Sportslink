import React from 'react'
import {uid} from 'react-uid'
import Comment from './Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton'
import { getUser } from '../../actions/profiles';

class PostCard extends React.Component{
    constructor(props){
        super(props)
        getUser(this.props.post.user.username, this)
    }

    state ={
        message: '',
        hideComments: false,
        upvoted: false,
        thumbsUp: "thumbsUp",
        post: {likes: []},
        user: {image: null,
                name: ''}
    }
    alterComments = () =>{
        this.setState({hideComments: !this.state.hideComments})
    }

    getUpvoted = () => {
        const username = this.props.user.username
        if (this.props.post.likes.includes(username)){
            return true
        }
        else{
            return false
        }
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
        if (!this.getUpvoted()){
            this.setState({upvoted: true, thumbsUp: 'thumbsUpLight'})
            this.props.upvote(this.props.post, 1)
        }

        else{
            this.setState({upvoted: false, thumbsUp: "thumbsUp"})
            this.props.upvote(this.props.post, -1)
        }
    }

    getUpvotedClass = () => {
        if (this.getUpvoted()){
            return 'thumbsUpLight'
        }

        else{
            return "thumbsUp"

        }
    }
    
    checkChange = (e) => {
        this.setState({
          message: e.target.value
        })
    }   

    clickEnterComment = (e) => {
        if(e.key === 'Enter' && this.state.message.length != 0){
            this.submitComment()
        }
    }
    submitComment = () => {
        this.props.newComment(this.state.message, this.props.post._id)
        this.setState({message: ''})
    }

    handleClick = () => {
        window.location.href = '/viewprofile/' + this.props.post.user.username
    }

    hideViewComments = () => {
        return this.props.post.comments.length === 0
    }

    hideViewMoreComments = () => {
        return this.props.post.comments.length >= 5
    }

    render(){
        return <div className="postCard">
            <div className="postInfo">
            <div className="posterInfo" onClick={this.handleClick}>
                <div className="posterPic">
                <img src={this.state.user.image}></img>
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
            <span> {this.props.post.likes.length + " Likes"} </span>
            <span>
                {this.props.post.comments.length + " Comments"}
            </span>
                <IconButton onClick={this.upvote} className="thumbsUpButton"> <ThumbUpIcon className={this.getUpvotedClass()}/></IconButton>
                </div>

            </div>
            <input 
            className="commentInput"
            onKeyPressCapture={this.clickEnterComment}
            onChange={this.checkChange}
            value={this.state.message}
            placeholder="Add New Comment"/>
            <div className="viewMoreComments" hidden={this.hideViewMoreComments()}>

            </div>

            <div className="comments" hidden={this.state.hideComments}>
            {this.props.post.comments.map((comment) => {
              return <Comment key={uid(comment)} comment={comment}/>
            }
            )}

            </div>

            <div className="viewComments" hidden={this.hideViewComments()} onClick={this.alterComments}>
                {this.commentMessage()}
            </div>
        </div>
    }
}

export default PostCard