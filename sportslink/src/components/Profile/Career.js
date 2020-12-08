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
        const allAccomplishments = this.props.accomplishments
        var nextIdNum = 0
        if(allAccomplishments.length > 0){
            nextIdNum = parseInt(allAccomplishments[allAccomplishments.length - 1].id) + 1
        }
        this.props.setIdToEdit(nextIdNum)
        
    }

    handleCareerCardClick = (event) =>{
        this.props.setBoxState(7);
    }

    render(){
        return <div className="profileCareer">
           <h1>Career Accomplishments</h1>
           <AddCircleIcon className={"addExperienceButton"} onClick={this.handleAddButtonClick}/>
           
        { /*  {this.props.accomplishments.map((accomplishment) => {
              return <CareerCard key={uid(accomplishment)} accomplishment={accomplishment} handleCareerCardClick={this.handleCareerCardClick.bind(this)} setIdToEdit={this.props.setIdToEdit.bind(this)}/>

            }
            )} */}
            
        </div>
    }
}

export default Career