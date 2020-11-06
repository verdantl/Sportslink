import React from 'react'
import {uid} from 'react-uid'
import AddCircleIcon from '@material-ui/icons/AddCircle'

class Career extends React.Component{
    state = {
        
    }
    render(){
        return <div className="profileCareer">
           <h1>Career Accomplishments</h1>
           <AddCircleIcon className="addExperienceButton"/>
           {this.props.accomplishments.map((accomplishment) => {
              return <div key={uid(accomplishment)} className='accomplishmentCard'>
                  {accomplishment}

              </div>
            }
            )}
        </div>
    }
}

export default Career