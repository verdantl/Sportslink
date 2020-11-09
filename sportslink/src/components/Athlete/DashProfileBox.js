import React from 'react'
import './DashProfileBox.css'
import {Link} from "react-router-dom";


class DashProfileBox extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return <div className="personalProfileBox">
                    <div className="personalPic">
                        <img src={this.props.user.image}/>
                    </div>
                    <div className="personalProfileName">
                        {this.props.user.name}
                    </div>
                    <Link to="/profile/leb">View your profile</Link>
                </div>
    }
}

export default DashProfileBox