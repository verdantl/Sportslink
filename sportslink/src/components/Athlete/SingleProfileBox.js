import React from 'react'
import './SingleProfileBox.css'
import '../logo.svg'

class SingleProfileBox extends React.Component{

    render(){
        return <div className='profileBox'>
            <div className='profilePic'> <img src={this.props.user.image}/></div>

            <div className='singleProfileSubBox'>
            <p className="profileBoxName"> {this.props.user.name} </p>
            <p className="profileDescription"> {this.props.user.description}</p>
            </div>
        <p className="singleBoxLocation">{this.props.user.location}</p>


        </div>

    }
}

export default SingleProfileBox