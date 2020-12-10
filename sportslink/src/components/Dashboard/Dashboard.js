import React from 'react'
import './Dashboard.css'
import DashProfileBox from '../Athlete/DashProfileBox'
import NewsBox from './NewsBox'
import lebron from '../images/lebron.jpg'
import NewPost from './NewPost'
import Posts from './Posts'
import { getUser, getUsers } from '../../actions/profiles' 
import { getPosts, newPost, newComment, upvotePost, downvotePost} from '../../actions/posts'

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.props.history.push("/dashboard");
        getUsers(this)
        getPosts(this)
        getUser(this.props.currentUser, this)
    }
    
    state = {
        user: {},
        users: [],
        posts: [],
        videoOfTheDay: "https://www.youtube.com/embed/AqspfYQ-pN8"
      }

    createNewPost = (postText) => {
        const post = {
            user: this.state.user,
            text: postText,
            likes: []
        }
        newPost(post, this)
    }

    addNewComment = (commentText, postID) => {
        const comment = {
            user: this.state.user,
            text: commentText
        }
        newComment(comment, postID, this)
    }

    upvotePost = (post, number) => {
        // editPostInfo()
        const reqBody = {username: this.state.user.username}
        if (number > 0){
            //add the username to the list of post likes
            upvotePost(reqBody, post._id, this)
        }
        else{
            //remove the username from the list of post likes
            downvotePost(reqBody, post._id, this)
        }
        this.setState({})
    }

    render(){

        return <div className="dashboard">
            <div className="dashboardLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
                <NewsBox/>                
                </div>
            <div className="dashboardRightColumn">
                <NewPost createNewPost={this.createNewPost}/>
                <Posts 
                history={this.props.history}
                user={this.state.user} 
                upvote={this.upvotePost} 
                newComment={this.addNewComment} 
                posts={this.state.posts}/>
            </div>
            <div className='videoOfTheDay'>
                    <div><span className='videoOfTheDayTitle'>Video of the Day</span></div>
                    <iframe className={'video'} src={this.state.videoOfTheDay} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        </div>
    }
}

export default Dashboard