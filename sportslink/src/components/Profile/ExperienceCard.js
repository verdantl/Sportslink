import React from 'react'
import Edit from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class ExperienceCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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

    updateInputBoxId = () =>{
        this.props.setIdToEdit(this.props.experience._id);
    }

    handleEditButtonClick = (event) => {
        event.preventDefault();
        console.log('-------------- Edit button clicked');
       // this.toggleEditing();
        this.props.setBoxState(1);
        this.updateInputBoxId();
        console.log("handleEditButtonClick")
    }

    handleRemoveButtonClick = (event) =>{
        event.preventDefault();
        this.props.setBoxState(3);
        this.updateInputBoxId();
    }
    
    render(){
        return( 
            <div>
                <div className={this.props.className} onMouseEnter={this.handleDisplay} onMouseLeave={this.handleHide}>
                    <span><h2>{this.props.experience.title}</h2></span>
                    <span className="editDelete" hidden={this.state.hideButtons}>
                        <EditButton  handleEditButtonClick={this.handleEditButtonClick.bind(this)} toggleEditing ={this.toggleEditing.bind(this)} setBoxState={this.props.setBoxState.bind(this)} updateInputBoxId = {this.updateInputBoxId.bind(this)} />
                        <DeleteButton handleRemoveButtonClick={this.handleRemoveButtonClick.bind(this)}/>
                    </span>
                    <h3>{this.props.experience.organization} {this.props.experience.years}</h3>
                    <h4>{this.props.experience.league}</h4>
                    <p>{this.props.experience.description}</p>

                </div>
            </div>
        );
    }
}

export default ExperienceCard