import React from 'react'
import {uid} from 'react-uid'
import Comment from '../Dashboard/Comment'
import IconButton from '@material-ui/core/IconButton'
import Delete from "@material-ui/icons/Delete"
import ConfirmationDialog from '../ConfirmationDialog'
import { getUser } from '../../actions/profiles'

class AdminPostCard extends React.Component{
    constructor(props){
        super(props)
        getUser(this.props.post.user.username, this)

    }
    state = {
        hideComments: true,
        openDialog: false,
        user: {
            name: '',
            image: null
        }
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
        this.props.removePost(this.props.post._id)
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
                <img src={this.state.user.image}></img>
                </div>
                <div className='posterName'>
                {this.state.user.name}
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
                </div>

            </div>

            <div className="comments" hidden={this.state.hideComments}>
            {this.props.post.comments.map((comment) => {
              return <Comment key={uid(comment)} history={this.props.history} comment={comment} clickProfile={this.props.clickProfile}/>
            }
            )}

            </div>

            <div className="viewComments" hidden={this.props.post.comments.length === 0} onClick={this.alterComments}>
                {this.commentMessage()}
            </div>
        </div>
    }
}

export default AdminPostCard