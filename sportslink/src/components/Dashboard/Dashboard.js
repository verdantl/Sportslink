import React from 'react'
import './Dashboard.css'
import DashProfileBox from '../Athlete/DashProfileBox'
import NewsBox from './NewsBox'
import ReactLoading from 'react-loading';
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
        hideLoading: true,
        user: {},
        users: [],
        posts: [],
        videoOfTheDay: "https://www.youtube.com/embed/AqspfYQ-pN8"
      }

    createNewPost = (postText) => {
        this.setState({hideLoading: false})
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
                <div hidden={this.state.hideLoading}>
                <NewPost createNewPost={this.createNewPost}/>
                </div>
               
            <div hidden={!this.state.hideLoading}>
                <ReactLoading type={'spinningBubbles'} color={'black'} className='loadingAnimation'/>
                </div>

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