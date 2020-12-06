import React from 'react'
import {uid} from 'react-uid'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import CareerCard from './CareerCard'

class Career extends React.Component{
    state = {
        addButtonClass: 'addExperienceButton',
        hideButtons: true
    }

    handleButtonOn = (event) => {
        this.setState({addButtonClass: 'addExperienceButtonLight'})

    }

    handleButtonOff = (event) => {
        this.setState({addButtonClass: 'addExperienceButton'})

    }

    handleAddButtonClick = (event) =>{
        this.props.setBoxState(4);
    }

    render(){
        return <div className="profileCareer">
           <h1>Career Accomplishments</h1>
           <AddCircleIcon className={this.state.addButtonClass} onMouseEnter={this.handleButtonOn} onMouseLeave={this.handleButtonOff} onClick={this.handleAddButtonClick}/>
           {this.props.accomplishments.map((accomplishment) => {
              return <CareerCard key={uid(accomplishment)} accomplishment={accomplishment}/>

            }
            )}
        </div>
    }
}

export default Career