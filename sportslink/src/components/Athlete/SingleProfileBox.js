import React from 'react'
import './SingleProfileBox.css'
import '../logo.svg'

class SingleProfileBox extends React.Component{

    handleClick = () => {
        window.location.href = '/viewprofile/' + this.props.user.username
    }

    render(){
        return <div className='profileBox'>
            <div className='profilePic'> <img src={this.props.user.image}/></div>

            <div className='singleProfileSubBox'>
            <p className="profileBoxName" onClick={this.handleClick}> {this.props.user.name} </p>
            <p className="profileDescription"> {this.props.user.description}</p>
            </div>
        <p className="singleBoxLocation">{this.props.user.location}</p>


        </div>

    }
}

export default SingleProfileBox