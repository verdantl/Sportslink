import React from 'react'
import '../components-css/SingleProfileBox.css'
import '../logo.svg'

class SingleProfileBox extends React.Component{

    render(){
        return <div className='profileBox'>
            <img className="profilePic" src="logo512.png"/>
            <div>
                <p className="profileName"> Username </p>
                <p className="profileDescription"> Description</p>
            </div>

        </div>

    }
}

export default SingleProfileBox