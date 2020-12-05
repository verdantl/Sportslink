import React from 'react'

class NewsCard extends React.Component{


    render(){
        return <div className='newsCard'>
            <h2>{this.props.news.title}</h2>
            <span className="gray">{this.props.news.date}</span>
            <span className="gray">{this.props.news.source}</span>
        </div>
    }
}

export default NewsCard