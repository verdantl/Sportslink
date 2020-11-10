import React from 'react'
import Edit from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class ExperienceCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            title: this.props.experience.title,
            organization: this.props.experience.organization, 
            league: this.props.experience.league, 
            stats: this.props.experience.stats, 
            description: this.props.experience.description, 
            years: this.props.experience.years,
            hideButtons: true,
            editing: false
        };
    }

 


    handleDisplay = (event) => {
        this.setState({hideButtons: false})
    }

    handleHide = (event) => {
        this.setState({hideButtons: true})
    }

    updateInfo = (event) =>{
        console.dir( this)
        console.log('this.state.league', this.state.league);
        this.props.updateExperience(this.props.experience.id, 
            this.state.title, 
            this.state.organization, 
            this.state.league, 
            this.state.stats, 
            this.state.description, 
            this.state.years);
        this.toggleEditing(event);
    }

    toggleEditing = (event) =>{
        this.setState({editing: !this.state.editing});
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
    };

    render(){
        console.log('this.state.editing', this.state.editing)
        if(this.state.editing){
            return(
                <div className={this.props.className} onMouseEnter={this.handleDisplay} onMouseLeave={this.handleHide}>
                    <input type="text" className="experienceTileH2" name="title" defaultValue={this.state.title} onChange={this.handleChange}/>
                    <input type="text" className="experienceTileH3" name="name" defaultValue={this.state.organization} onChange={this.handleChange}/>
                    <input type="text" className="experienceTileH3" name="years" defaultValue={this.state.years} onChange={this.handleChange}/>
                    <input type="text" className="experienceTileH4" name="league" defaultValue={this.state.league} onChange={this.handleChange} />
                    <textarea type="text" className="experienceTileP" name="description" defaultValue={this.state.description} onChange={this.handleChange}/>
                    <button className="button-cancel" onClick={this.toggleEditing}>
                        Cancel
                    </button>
                    <button className="button-save" onClick={this.updateInfo}>
                        Save
                    </button>
                </div>
            );
        }
        return( 
            <div>
                <div className={this.props.className} onMouseEnter={this.handleDisplay} onMouseLeave={this.handleHide}>
                    <span><h2>{this.state.title}</h2></span>
                    <span className="editDelete" hidden={this.state.hideButtons}>
                        <EditButton toggleEditing ={this.toggleEditing.bind(this)} />
                        <DeleteButton/>
                    </span>
                    <h3>{this.state.organization} {this.state.years}</h3>
                    <h4>{this.state.league}</h4>
                    <p>{this.state.description}</p>

                </div>
            </div>
        );
    }
}

export default ExperienceCard