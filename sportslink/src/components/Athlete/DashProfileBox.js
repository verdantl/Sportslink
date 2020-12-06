import React from 'react'
import './DashProfileBox.css'
import {Link} from "react-router-dom";
import blankPic from '../images/blankPic.jpg'

class DashProfileBox extends React.Component{

    constructor(props){
        super(props)

    }

    getImage(){
        if (!this.props.user.image){
            return blankPic
        }
        else{
            return this.props.user.image
        }
    
    }

    render(){
        return <div className="personalProfileBox">
                    <div className="personalPic">
                        <img src={this.getImage()}/>
                    </div>
                    <div className="personalProfileName">
                        {this.props.user.name}
                    </div>
                    <Link to="/profile/TheRealLebronJames">View your profile</Link>
                </div>
    }
}

export default DashProfileBox