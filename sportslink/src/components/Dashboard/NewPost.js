import React from 'react'
import './NewPost.css'

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
        this.setState({focus: false})
        this.props.createNewPost(this.state.message)
    }

    checkChange = (e) => {
        this.setState({
          message: e.target.value
        })
    }

    render(){
        if (this.state.focus === true) {
            return <div className='focusedDiv'>
                <form 
                className="send-message-form">
                    <input
                    onChange={this.checkChange}
                    value={this.state.message}
                    placeholder="Type your message!"
                    type="text"/>
                </form>
                <div>
                    <button className='cancelButton' onClick={this.cancelPost}>Cancel</button>
                    <button className='submitButton' onClick={this.submitPost}>Submit</button>
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