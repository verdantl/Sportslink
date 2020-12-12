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
        getUser(this.props.currContact, this);
    }
    

    render() {
        return (
            <div>
                <div className="returnDiv">
                    <div className="header">
                        <div className="contactImage"></div>
                        <p>{this.props.currContact}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactHeader