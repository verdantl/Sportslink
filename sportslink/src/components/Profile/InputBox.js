import React from 'react'
import './profile.css'

import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import countryData from '../../country_data/countries.json'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'


/*
    States
0: closed
1: editing an experience
2: adding an experience
3: removing an experience  
4: adding an accomplishment
5: editing the one line description
6: editing the profile page/summary thing
7: clicked on career card
8: removing an accomplishment
*/

class InputBox extends React.Component{
    state = {
        contactClass: 'contact',
        boxState: 0,
        idToEdit: null
    }

    setBoxState = (newBoxState) =>{
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
      if(this.state.boxState == 8){
        this.setBoxState(7)
      }
      else{
        this.setBoxState(0)
      }
    }

    handleSave = () =>{
      if(this.state.boxState == 1){
          this.props.updateExperience(
              this.state.idToEdit, 
              this.state.title, 
              this.state.organization, 
              this.state.league, 
              this.state.stats, 
              this.state.description, 
              this.state.years);
          this.setBoxState(0);
      }
      else if(this.state.boxState == 2){
        this.props.addExperience(
            this.state.idToEdit, 
            this.state.title, 
            this.state.organization, 
            this.state.league, 
            this.state.stats, 
            this.state.description, 
            this.state.years);
        this.setBoxState(0);
      }
      else if(this.state.boxState == 3){
        this.props.removeExperience(this.state.idToEdit);
        this.setBoxState(0);
      }
      else if(this.state.boxState == 4){
        this.props.addAccomplishment(this.state.idToEdit, this.state.accomplishmentText);
        this.setBoxState(0);
      }
      else if(this.state.boxState == 5){
        this.props.updateDescription(this.state.descriptionMain);
        this.setBoxState(0);
      }
      else if(this.state.boxState == 6){
        this.props.updateLocation(this.state.location);
        this.props.updateOrganization(this.state.organization);
        this.props.updateSports(this.state.sports);
        this.setBoxState(0);
      }
      else if(this.state.boxState == 7){
        this.props.updateAccomplishment(
            this.state.idToEdit, 
            this.state.accomplishmentText);
        this.setBoxState(0);
      }
      else if(this.state.boxState == 8){
        this.props.removeAccomplishment(this.state.idToEdit);
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
    if(this.state.boxState == 1){
      const experience = this.props.getExperienceById(this.state.idToEdit);
      this.setState({
        title: experience.title,
        organization: experience.organization, 
        league: experience.league, 
        stats: experience.stats, 
        description: experience.description, 
        years: experience.years
      });
    }
    else if(this.state.boxState == 2){
      const nextIdNum = this.getNextExperienceId();
      this.setState({
        title: "",
        organization: "", 
        league: "", 
        stats: "", 
        description: '', 
        years: '',
        idToEdit: nextIdNum
      });
    }
    // no default value changes for state 3 (removing an experience)
    // adding an accomplishment
    else if(this.state.boxState == 4){ 
      const nextIdNum = this.props.getAccomplishments().length;
      this.setState({
        accomplishmentText: 'Accomplishment',
        idToEdit: nextIdNum
      });
    }
    else if(this.state.boxState == 5){ 
      this.setState({
        descriptionMain: this.props.user.description,
      });
    }
    else if(this.state.boxState == 6){ 
      this.setState({
        location: this.props.user.location,
        organization: this.props.user.organization,
        sports: this.props.user.sports,
      });
    }
    else if(this.state.boxState == 7){ 
      const accomplishment = this.props.getAccomplishmentById(this.state.idToEdit);
      this.setState({
        accomplishmentText: accomplishment.career
      });
    }
    // no default value changes for state 8 (removing an accomplishment)
  }


    getNextExperienceId = () =>{
        const allExperiences = this.props.user.experience
        var nextIdNum = 0
        if(allExperiences.length > 0){
            nextIdNum = parseInt(allExperiences[allExperiences.length - 1].id) + 1
        }
        return nextIdNum
    }

    handleRemoveButtonClick7 = () =>{
      this.setBoxState(8)
    }


    // for editing experiences
    renderState1(){
      console.log(this.state.title)
      return (
        <div className="modal" id="modal">
          <h2>The Experience</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               {/* Experience to edit: {this.state.idToEdit} */}
              <input type="text" className="experienceTileH2" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
              <input type="text" className="experienceTileH3" name="organization" placeholder="Organization" value={this.state.organization} onChange={this.handleChange}/>
              <input type="text" className="experienceTileH3" name="years" placeholder="Year(s)" value={this.state.years} onChange={this.handleChange}/>
              <input type="text" className="experienceTileH4" name="league" placeholder="League" value={this.state.league} onChange={this.handleChange} />
              <textarea className="experienceTileP" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>

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

    renderState3(){
      return (
        <div className="modal" id="modal">
          <h2>Confirmation</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               {/* Experience to edit: {this.state.idToEdit} */}
              Are you sure you want to delete this experience? This action cannot be undone.
          </div>
          <div className="actions">
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Confirm
            </button>
          </div>
        </div>
      );
    }

    renderState4(){
      return (
        <div className="modal" id="modal">
          <h2>Add an Accomplishment</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               <input type="text" className="experienceTileH3" name="accomplishmentText" placeholder='Accomplishment' onChange={this.handleChange}/>
          </div>
          <div className="actions">
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Confirm
            </button>
          </div>
        </div>
      );
    }

    renderState5(){
      return (
        <div className="modal" id="modal">
          <h2>Update Description</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               <input type="text" className="experienceTileH3" name="descriptionMain" placeholder="Description" value={this.state.descriptionMain} onChange={this.handleChange}/>
          </div>
          <div className="actions">
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Confirm
            </button>
          </div>
        </div>
      );
    }

    renderState6(){
      return (
        <div className="modal" id="modal">
          <h2>Update Description</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
            <div className='personalInfo'>
              <div>
                <h4 className="detailsTitle">Location:</h4> 
                
                <Autocomplete
                    id="profileLocationDropdown"
                    options={countryData}
                    getOptionLabel={(option) => option.country}
                    onSelect={this.handleChange}
                    renderInput={(params) => <TextField {...params} className="experienceTileH3" name="location" placeholder="Location" />}
                    />
                  {/* <input type="text" className="experienceTileH3" name="location" placeholder="Location" value={this.state.location} onChange={this.handleChange}/> */}
              </div>
              <div>
                <h4 className="detailsTitle">Current Organization:</h4> 
                  <input type="text" className="experienceTileH3" name="organization" placeholder="Organization" value={this.state.organization} onChange={this.handleChange}/>
              </div>
              <div>
                <h4 className="detailsTitle">Sport(s):</h4>
                  <input type="text" className="experienceTileH3" name="sports" placeholder="Sport(s)" value={this.state.sports} onChange={this.handleChange}/>
              </div>
            </div>
          </div>
          
          <div className="actions">
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Confirm
            </button>
          </div>
        </div>
      );
    }

    renderState7(){
      return (
        <div className="modal" id="modal">
          <h2>The Accomplishment</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               <input type="text" className="experienceTileH3" name="accomplishmentText" placeholder='Accomplishment' value={this.state.accomplishmentText}  onChange={this.handleChange}/>
          </div>
          <div className="actions">
            <DeleteButton handleRemoveButtonClick={this.handleRemoveButtonClick7.bind(this)}/>
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Confirm
            </button>
          </div>
        </div>
      );
    }

    renderState8(){
      return (
        <div className="modal" id="modal">
          <h2>Confirmation</h2> {/* Can enter a title here for the window (between the h2 tags) */} 
          <div className="content">
               {/* Experience to edit: {this.state.idToEdit} */}
              Are you sure you want to delete this accomplishment? This action cannot be undone.
          </div>
          <div className="actions">
            <button className="button-cancel" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="button-save" onClick={this.handleSave}>
              Confirm
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
        else if (this.state.boxState == 2){
          return this.renderState1(); // because they look the same
        }
        else if (this.state.boxState == 3){
          return this.renderState3(); 
        }
        else if (this.state.boxState == 4){
          return this.renderState4(); 
        }
        else if (this.state.boxState == 5){
          return this.renderState5(); 
        }
        else if (this.state.boxState == 6){
          return this.renderState6(); 
        }
        else if (this.state.boxState == 7){
          return this.renderState7(); 
        }
        else if (this.state.boxState == 8){
          return this.renderState8(); 
        }
        else{
          return null;
        }
    }
}

export default InputBox