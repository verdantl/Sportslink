import React from 'react'
import LocationSearchingSharpIcon from '@material-ui/icons/LocationSearchingSharp';
import '../components-css/DashProfileBox.css'

class DashProfileBox extends React.Component{
    render(){
        return <div className="profileBox">
                    <LocationSearchingSharpIcon className="profilePic"/>
                    <div>
                        <p> This is my profile name</p>
                    </div>

                    <div>
                        <p>Profile</p>
                    </div>

                    <div>
                        <p>Log Out</p>
                    </div>

                </div>
    }
}

export default DashProfileBox