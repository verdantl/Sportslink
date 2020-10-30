import React from 'react'
import '../components-css/SingleProfileBox.css'
import '../logo.svg'

class SingleProfileBox extends React.Component{

    render(){
        return <div className='profileBox'>
            <div className='profilePic'> <img src="logo512.png"/></div>

            <div className='subBox'>
                <p className="profileName"> Username </p>
                <p className="profileDescription"> Description this is a very long long long long long long description</p>
            </div>


        </div>

    }
}

export default SingleProfileBox