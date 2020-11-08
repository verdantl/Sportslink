import React from 'react'

class NewsCard extends React.Component{
    state = {
        className: 'newsCard'
    }

    handleEnter = (event) => {
        this.setState({className: 'newsCardLight'})
    }

    handleLeave = (event) => {
        this.setState({className: "newsCard"})
    }

    render(){
        return <div className={this.state.className } onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
            <h2>{this.props.news.title}</h2>
            <span className="gray">{this.props.news.date}</span>
            <span className="gray">{this.props.news.source}</span>
        </div>
    }
}

export default NewsCard