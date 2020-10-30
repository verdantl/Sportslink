import React from 'react'
import SingleProfileBox from './SingleProfileBox'
import '../components-css/SingleAdminBox.css'

class SingleAdminBox extends React.Component{
    render(){
        return <div>
            <SingleProfileBox className="singleProfileBox"/>
        </div>
    }
}

export default SingleAdminBox