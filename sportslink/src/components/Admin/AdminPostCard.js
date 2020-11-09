import React from 'react'
import {uid} from 'react-uid'
import Comment from '../Dashboard/Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton'
import Delete from "@material-ui/icons/Delete"
import ConfirmationDialog from '../ConfirmationDialog'

class AdminPostCard extends React.Component{
    state ={
        hideComments: true,
        openDialog: false 
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

    openDialog = () => {
        this.setState({openDialog: true})
    }

    handleAgreeClose = (event) => {
        this.setState({openDialog: false})
        this.props.removePost(this.props.value)
    }
    handleDisagreeClose = () => {
        this.setState({openDialog: false})
    }
    render(){
        return <div className="postCard">
            <ConfirmationDialog open={this.state.openDialog} 
            handleAgreeClose={this.handleAgreeClose} 
            handleCancelClose={this.handleDisagreeClose}
            confirmation={{title: "Delete Post", description: "Are you sure?"}}/>
            <IconButton onClick={this.openDialog}>
                <Delete/>
            </IconButton>
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
                </div>

            </div>

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

export default AdminPostCard