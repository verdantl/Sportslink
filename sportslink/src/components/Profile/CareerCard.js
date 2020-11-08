import React from 'react'

import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class CareerCard extends React.Component{
    state = {
        className : "accomplishmentCard"
    }
    
    handleDisplay = (event) => {
        this.setState({className: 'accomplishmentCardLight'})
    }

    handleHide = (event) => {
        this.setState({className: 'accomplishmentCard'})
    }

    render(){
        return <div className={this.state.className} onMouseEnter={this.handleDisplay} onMouseLeave={this.handleHide}>
        <span>{this.props.accomplishment}</span>
        {/* <span hidden={this.state.hideButtons}>
            <EditButton/>
            <DeleteButton/>   
      </span> */}

    </div>
    }
}

export default CareerCard