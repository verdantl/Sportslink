import React from 'react'

import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class CareerCard extends React.Component{

    render(){
        return <div className={"accomplishmentCard"}>
        <span>{this.props.accomplishment.career}</span>
        {/* <span hidden={this.state.hideButtons}>
            <EditButton/>
            <DeleteButton/>   
      </span> */}

    </div>
    }
}

export default CareerCard