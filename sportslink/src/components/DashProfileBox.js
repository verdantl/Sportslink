import React from 'react'
import LocationSearchingSharpIcon from '@material-ui/icons/LocationSearchingSharp';
import '../components-css/DashProfileBox.css'

class DashProfileBox extends React.Component{
    render(){
        return <div className="profileBox">

                    <div className="profileName">
                        This is my profile name
                    </div>
                    <div className="button">
                        Profile
                    </div>
                    <div className="button">
                        Log Out
                    </div>

                </div>
    }
}

export default DashProfileBox