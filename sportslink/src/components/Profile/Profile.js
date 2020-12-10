import React from 'react'
import Biography from '../ViewProfile/Biography'
import Images from './Images'
import Career from './Career'
import ProfileInfo from './ProfileInfo'
import Experience from './Experience'
import './profile.css'
import EditButton from './EditButton'
import InputBox from './InputBox'
import { getUser, updateUserInfo, addImage, removeImage } from '../../actions/profiles'
import {addExperience, removeExperience, updateExperience } from '../../actions/experience'
import { addCareer, removeCareer, updateCareer } from '../../actions/career'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.inputBox = React.createRef();
        if (this.props.currentUser === "admin"){
            getUser(this.props.match.params.username, this)
        } else {
            getUser(this.props.currentUser, this)
        }
        
    }

    state = {
        user: {
            player: true,
            name: "",
            description: "",
            experience: [],
            career: [],
            images: []
        }
    }
    changePicture = (image) => {
        const changes = {image: image}
        updateUserInfo(changes, this.state.user.username, this)
    }

    removeImage = (image) => {
        removeImage(image._id, this.state.user.username, this)
    }

    addImage = (image) => {
        const imageStuff = {image: image}
        addImage(imageStuff, this.state.user.username, this)
    }

    handleButtonOff = (event) => {
        this.setState({addButtonClass: 'addExperienceButton'})

    }
    
    updateExperience = (id, title, organization, league, stats, description, years) => {
        const experience = {
            _id: id,
            title: title,
            organization: organization,
            league: league,
            stats: stats,
            description: description,
            years: years
        }

        updateExperience(experience, this.state.user.username, this)
        console.dir(global.experience)
       // this.render();
        //this.setState({experience: experiences});
    }

    addExperience = (id, title, organization, league, stats, description, years) => {

        const experience= {
            title: title,
            organization: organization,
            league: league,
            stats: stats,
            description: description,
            years: years
        }
        addExperience(experience, this.state.user.username, this)
        this.setState({}); 
    }

    removeExperience = (id) => {
        console.log(id)
        removeExperience(id, this.state.user.username, this)

        this.setState({}); 
    }

    getExperienceById = (id) =>{
        const experiences = this.state.user.experience
        let i;
        for (i in experiences){            
            if (experiences[i]._id == id){
                return experiences[i]
            }
        }
    }

    getAccomplishmentIndexById = (id) =>{
        const accomplishments = this.state.user.career
        let i = 0;
        for (i = 0; i < accomplishments.length; i++){            
            if (accomplishments[i].id == id){
                return i
            }
        }
    }

    getAccomplishmentById = (id) =>{
        let i = 0;
        for (i = 0; i < this.state.user.career.length ; i ++){
            if (this.state.user.career[i]._id === id){
                return this.state.user.career[i]
            }
        }
    }

    getAccomplishments = () =>{
        return this.state.user.career
    }

    addAccomplishment = (id, accomplishment) =>{
        addCareer(accomplishment, this.state.user.username, this)
        this.setState({}); // used to cause a page refresh upon adding the experience  
    }

    updateAccomplishment = (id, accomplishmentText) => {
        const accomplishment = {_id: id, career: accomplishmentText}
        updateCareer(accomplishment, this.state.user.username, this)
        this.setState({}); // used to cause a page refresh upon adding the experience  
    }

    removeAccomplishment = (id) => {
        removeCareer(id, this.state.user.username, this)
        this.setState({});
    }

    updateDescription = (newDescription) =>{
        const updateUser = {description: newDescription}
        updateUserInfo(updateUser, this.state.user.username, this)
        this.setState({}); // used to cause a page refresh upon adding the experience  
    }

    updateLocation = (location) =>{
        const updateUser = {location: location}
        updateUserInfo(updateUser, this.state.user.username, this)
        this.setState({}); // used to cause a page refresh upon adding the experience 
    }

    updateOrganization = (organization) =>{
        const updateUser = {organization: organization}
        updateUserInfo(updateUser, this.state.user.username, this)
        this.setState({}); // used to cause a page refresh upon adding the experience 
    }

    updateSports = (sports) =>{
        const updateUser = {sports: sports}
        updateUserInfo(updateUser, this.state.user.username, this)
        this.setState({}); // used to cause a page refresh upon adding the experience 
    }
    
    setBoxState = (newBoxState) =>{
        this.inputBox.current.setBoxState(newBoxState);  
        //this.inputBox.current.setDefaultValuesForState();
        this.setState({}); // used to cause a page refresh upon adding the experience 
    }

    setIdToEdit = (eId) =>{
        this.inputBox.current.setIdToEdit(eId);
        this.setState({}); 
      }


    handleBiographyEditButtonClick = (event) => {
        this.setBoxState(5);
    }

    sortExperience = () => {
            this.state.user.experience.sort((a, b) => {
                if (a.years > b.years){
                    return -1} 
                else if (a.years === b.years){
                    return 0} 
                else{
                    return 1}
            }) 
            return this.state.user.experience
    }

    render(){
        return <div className={(this.state.user.player) ? "userProfile" : "recruiterProfile"}>
            <div className="profileCard">
                <ProfileInfo user={this.state.user.name} changePic={this.changePicture} global={this.state.user} setBoxState={this.setBoxState.bind(this)} />
                <div className='editSection'>
                <Biography description={this.state.user.description}/>
                <EditButton handleEditButtonClick={this.handleBiographyEditButtonClick.bind(this)}/>
                </div>
            </div>


            <div className="achievements">
                <div></div>
                <Experience experience={ this.sortExperience() }
                             updateExperience={this.updateExperience.bind(this)} setBoxState={this.setBoxState.bind(this)} setIdToEdit={this.setIdToEdit.bind(this)}/>
                <InputBox ref={this.inputBox} updateExperience={this.updateExperience.bind(this)} getExperienceById={this.getExperienceById.bind(this)} 
                    addExperience={this.addExperience.bind(this)} removeExperience={this.removeExperience.bind(this)} getAccomplishments={this.getAccomplishments.bind(this)} 
                    addAccomplishment={this.addAccomplishment.bind(this)} updateDescription={this.updateDescription.bind(this)} updateLocation={this.updateLocation.bind(this)}
                    updateOrganization={this.updateOrganization.bind(this)} updateSports={this.updateSports.bind(this)} getAccomplishmentById={this.getAccomplishmentById.bind(this)}
                    updateAccomplishment={this.updateAccomplishment.bind(this)} removeAccomplishment={this.removeAccomplishment.bind(this)} user={this.state.user}/> 
                <div className="profileRightColumn">
                <Images images={this.state.user.images} addPic={this.addImage} removePic={this.removeImage}/>
                <Career accomplishments={this.state.user.career} setBoxState={this.setBoxState.bind(this)} setIdToEdit={this.setIdToEdit.bind(this)}/>
                </div>
                
            </div>
        </div>
    }
}

export default Profile