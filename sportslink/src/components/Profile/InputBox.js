import React from 'react'
import Biography from '../ViewProfile/Biography'
import Images from './Images'
import Career from './Career'
import ProfileInfo from './ProfileInfo'
import Experience from './Experience'
import './profile.css'
import coolcat from '../images/coolcat.jpg'
import icedragon from '../images/icedragon.jpg'
import lebron from '../images/lebron.jpg'

import EditButton from './EditButton'




class InputBox extends React.Component{
    state = {
        contactClass: 'contact',
        boxState: 0,
        idToEdit: null
    }

    setBoxState = (newBoxState) =>{
      // need to do it this way as setState is asynchronous
      this.setState({boxState: newBoxState}, function () {
        this.setDefaultValuesForState();
      });
    }

    setIdToEdit = (eId) =>{
      // need to do it this way as setState is asynchronous
      this.setState({idToEdit: eId}, function () {
        this.setDefaultValuesForState();
      });
    }

    handleCancel = () =>{
      this.setBoxState(0)
    }

    handleSave = () =>{
      if(this.state.boxState == 1){
          this.props.updateExperience(this.state.idToEdit, 
              this.state.title, 
              this.state.organization, 
              this.state.league, 
              this.state.stats, 
              this.state.description, 
              this.state.years);
        this.setBoxState(0);
      }
    }



    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      console.log('name', name)
      console.dir(target)
      this.setState({
          [name]:value
      });
      console.log('Handled change. This is state now')
      console.dir(this.state)
  };

  renderState0(){
    return null;
  }

  setDefaultValuesForState = () =>{
    var experience = this.props.getExperienceById(this.state.idToEdit);
    if(this.state.boxState == 1){
      this.setState({
        title: experience.title,
        organization: experience.organization, 
        league: experience.league, 
        stats: experience.stats, 
        description: experience.description, 
        years: experience.years
      });
    }
  }

    // for editing experiences
    renderState1(){
      return (
        <div className="modal" id="modal">
          <h2></h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               {/* Experience to edit: {this.state.idToEdit} */}
              <input type="text" className="experienceTileH2" name="title" defaultValue={this.state.title} onChange={this.handleChange}/>
              <input type="text" className="experienceTileH3" name="organization" defaultValue={this.state.organization} onChange={this.handleChange}/>
              <input type="text" className="experienceTileH3" name="years" defaultValue={this.state.years} onChange={this.handleChange}/>
              <input type="text" className="experienceTileH4" name="league" defaultValue={this.state.league} onChange={this.handleChange} />
              <textarea className="experienceTileP" name="description" defaultValue={this.state.description} onChange={this.handleChange}/>

          </div>
          <div className="actions">
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Save
            </button>
          </div>
        </div>
      );
    }


    render(){
        // does not render
        if(this.state.boxState == 0){
            return this.renderState0();
        }

        else if (this.state.boxState == 1){
          return this.renderState1();
        }
        else{
          return null;
        }
    }
}

export default InputBox