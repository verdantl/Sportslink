import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Button from '@material-ui/core/Button'

class Images extends React.Component{
    state = {
        imageNum: 0,
        leftArrow: 'leftarrow',
        rightArrow: 'rightarrow'
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

    lightUp = (event) => {
        if (event.target.classList[0] == ('leftarrow') | event.target.parentElement.classList[0] == ('leftarrow')){
            this.setState({leftArrow: 'leftarrowLight'});
        }
        else if (event.target.classList[0] == ('rightarrow') | event.target.parentElement.classList[0] == 'rightarrow'){
            this.setState({rightArrow: 'rightarrowLight'})
        }
    }

    lightOff = (event) => {
        if (event.target.classList[0] == ('leftarrowLight') | event.target.parentElement.classList[0] == 'leftarrowLight'){
            this.setState({leftArrow: 'leftarrow'});
        }
        else if (event.target.classList[0] == ('rightarrowLight') | event.target.parentElement.classList[0] == 'rightarrowLight'){
            this.setState({rightArrow: 'rightarrow'})
        }
    }

    render(){
        return <div className='profileImages'>

            <div onClick={this.previousImage} 
            onMouseEnter={this.lightUp}
            onMouseLeave={this.lightOff}
            className={this.state.leftArrow}>
            <ArrowLeftIcon className="arrow"/>
            </div>

            {/* <img src={this.props.images[this.state.imageNum]} className="oneImage"/> */}

            <div onClick={this.nextImage}
            onMouseEnter={this.lightUp}
            onMouseLeave={this.lightOff}
             className={this.state.rightArrow}>
            <ArrowRightIcon className="arrow"/>
            </div>

        </div>
    }
}
export default Images;