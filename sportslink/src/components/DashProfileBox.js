import React from 'react'
import LocationSearchingSharpIcon from '@material-ui/icons/LocationSearchingSharp';

class DashProfileBox extends React.Component{
    render(){
        return <div>
                    <LocationSearchingSharpIcon/>
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