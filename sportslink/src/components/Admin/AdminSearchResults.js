import React from 'react'
import SingleAdminBox from './SingleAdminBox'
import { uid } from "react-uid";
import ReactLoading from 'react-loading';
import AdminPosts from './AdminPosts'

class AdminSearchResults extends React.Component{

    render(){
        if (this.props.filter === 'athlete'){
            return <div>
                <div hidden={this.props.hideLoading}>
                <ReactLoading type={'spinningBubbles'} color={'black'} className='loadingAnimation'/>
                </div>
            {this.props.users.map((user) => {
                if (user.player){
                    return <SingleAdminBox history={this.props.history} key={uid(user)} adminAction={this.props.adminAction} user={user}/>
                }
            }
            )}
        </div>

        }
        else if (this.props.filter === 'posts'){
            return <AdminPosts removePost={this.props.removePost} posts={this.props.posts} clickProfile={this.props.clickProfile}/>
        }
        
        else{
            return <div>
            <div hidden={this.props.hideLoading}>
                <ReactLoading type={'spinningBubbles'} color={'black'} className='loadingAnimation'/>
                </div>
            {this.props.users.map((user) => {
                if (!user.player){
                    return <SingleAdminBox history={this.props.history} key={uid(user)} adminAction={this.props.adminAction} user={user}/>
                }
            }
            )}
        </div>

        }


    }
}

export default AdminSearchResults