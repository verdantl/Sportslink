import React from 'react'
import '../components-css/SingleProfileBox'
import '../logo.svg'

class SingleProfileBox extends React.Component{

    render(){
        return <div>
            <div className="profilePic">
                <img src="'../logo.svg'"/>
            </div>
            <div>
                <p className="profileName"> Username </p>
                <p className="profileDescription"> Description</p>
            </div>

        </div>

    }
}

export default SingleProfileBox