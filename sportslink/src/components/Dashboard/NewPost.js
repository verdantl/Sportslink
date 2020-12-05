import React from 'react'
import './NewPost.css'
import Button from '@material-ui/core/Button'

class NewPost extends React.Component{
    state = {
        focus: false,
        postText: ''
    }

    startPost = () => {
        this.setState({focus: true})
    }

    cancelPost = (e) => {
        this.setState({focus: false})
    }

    submitPost = (e) => {
        if (e.key === 'Enter' | e.target.getAttribute('name') ==="submitButton" | e.target.parentElement.getAttribute('name') ==="submitButton"){

            this.props.createNewPost(this.state.postText)
            this.setState({focus: false, postText: ''})
        }
    }

    checkChange = (e) => {
        this.setState({
          postText: e.target.value
        })
    }

    render(){
        if (this.state.focus === true) {
            return <div className='focusedDiv'>
                    <input
                    onChange={this.checkChange}
                    onKeyDownCapture={this.submitPost}
                    value={this.state.postText}
                    placeholder="Type your message!"
                    type="text"/>
                <div className="postButtons"> 
                    <Button className='cancelButton' onClick={this.cancelPost}>Cancel</Button>
                    <Button name='submitButton' onClick={this.submitPost}>Submit</Button>
                </div>
            </div>
        } else {
            return <div className='unfocusedDiv'>
                <button className='startNewPostButton' onClick={this.startPost}>Start a new post!</button>
            </div>
        }
    }
}

export default NewPost