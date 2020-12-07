import React from 'react'
import {uid} from 'react-uid'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import CareerCard from './CareerCard'

class Career extends React.Component{
    state = {
        hideButtons: true
    }

    handleAddButtonClick = (event) =>{
        this.props.setBoxState(4);
    }

    render(){
        return <div className="profileCareer">
           <h1>Career Accomplishments</h1>
           <AddCircleIcon className={"addExperienceButton"} onClick={this.handleAddButtonClick}/>
           {this.props.accomplishments.map((accomplishment) => {
              return <CareerCard key={uid(accomplishment)} accomplishment={accomplishment}/>

            }
            )}
        </div>
    }
}

export default Career