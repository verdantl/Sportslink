import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


class Images extends React.Component{
    state = {
        imageNum: 0
    }
    
    constructor(props){
        super(props)
    }
    nextImage = () =>{
        const nextNum = this.state.imageNum + 1;

        if (nextNum >= this.props.images.length){
            this.setState({imageNum: 0})
        }
        else{
            this.setState({imageNum: nextNum});
        }
        console.log(this.state.imageNum)
        console.log(this.props.images)
    }

    previousImage = () => {
        const nextNum = this.state.imageNum - 1;

        if (nextNum < 0){
            this.setState({imageNum: this.props.images.length - 1})
        }
        else{
            this.setState({imageNum: nextNum});
        }
    }

    render(){
        return <div className='profileImages'>
            <div onClick={this.previousImage} className="leftarrow">
            <ArrowLeftIcon className="arrow"/>
            </div>

            <img src={this.props.images[this.state.imageNum]} className="oneImage"/>
            <div onClick={this.nextImage} className="rightarrow">
            <ArrowRightIcon className="arrow"/>
            </div>

        </div>
    }
}
export default Images;