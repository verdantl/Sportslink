import React from 'react'

import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class CareerCard extends React.Component{
    state = {
        hideButtons: true,
    }
    
    handleDisplay = (event) => {
        this.setState({hideButtons: false})
    }

    handleHide = (event) => {
        this.setState({hideButtons: true})
    }

    render(){
        return <div className='accomplishmentCard' onMouseEnter={this.handleDisplay} onMouseLeave={this.handleHide}>
        {this.props.accomplishment}
        <div hidden={this.state.hideButtons}>
            <EditButton/>
            <DeleteButton/>   
      </div>

    </div>
    }
}

export default CareerCard