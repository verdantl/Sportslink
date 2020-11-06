import React from 'react'
import Edit from '@material-ui/icons/Edit'

class PersonalInfo extends React.Component{
    state = {


    }

    render(){
        return <div className='personalInfo'>

            <div>
            <h4 className="detailsTitle">Location:</h4> {this.props.user.location}
            </div>
            <div>
            <h4 className="detailsTitle">Current Organization:</h4> {this.props.user.organization}
            </div>
            <div>
            <h4 className="detailsTitle">Sport(s):</h4> {this.props.user.sports}
            </div>


        </div>
    }
}

export default PersonalInfo