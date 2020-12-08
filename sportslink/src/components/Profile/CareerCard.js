import React from 'react'

import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class CareerCard extends React.Component{

    handleClick = (e) => {
        this.props.setIdToEdit(this.props.accomplishment.id);
        this.props.handleCareerCardClick();
    }

    render(){
        return <div className={"accomplishmentCard"} onClick={this.handleClick}>
        <span>{this.props.accomplishment.career}</span>
        {/* <span hidden={this.state.hideButtons}>
            <EditButton/>
            <DeleteButton/>   
      </span> */}

    </div>
    }
}

export default CareerCard