import React from 'react';
import { getUser } from '../../actions/profiles';
import './ContactHeader.css';


class ContactHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                image: null,
                username: '',
                name:''
            }
        }
    }
    

    render() {
        getUser(this.props.currContact, this);
        return (
            <div className="returnDiv">
                <div className="header">
                    <img className="contactImage" src={this.state.user.image} alt="Profile Pic"></img>
                    <p>{this.state.user.name}</p>
                </div>
                <br/>
                <hr/>
            </div>
        )
    }
}

export default ContactHeader