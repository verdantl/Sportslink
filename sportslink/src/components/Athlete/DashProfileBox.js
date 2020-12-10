import React from 'react'
import './DashProfileBox.css'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom";
import blankPic from '../images/blankpic.jpg'

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
                    <Link to={"/profile"}>
                        <Button
                            variant="contained"
                            className="signUpButton"
                        > 
                            View your profile  
                        </Button>
                    </Link>
                </div>
    }
}

export default DashProfileBox