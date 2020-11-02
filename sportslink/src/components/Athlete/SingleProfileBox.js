import React from 'react'
import './SingleProfileBox.css'
import '../logo.svg'

class SingleProfileBox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className='profileBox'>
            <div className='profilePic'> <img src="logo512.png"/></div>

            <div className='subBox'>
    <p className="profileName"> {this.props.user.name} </p>
    <p className="profileDescription"> {this.props.user.description}</p>
            </div>


        </div>

    }
}

export default SingleProfileBox