import React from 'react'
import {uid} from 'react-uid'
import NewsCard from './NewsCard'

class NewsBox extends React.Component{
    state = {
        news: [
            {title: 'Los Angeles Lakers 2020 NBA Champions', date: "October 25, 2020", source:"ESPN"},
            {title: 'Denver Nuggets defeat title favorite Clippers', date: "October 10, 2020", source: "ESPN"},
            {title: 'Denver Nuggets defeat title favorite Clippers', date: "October 10, 2020", source: "ESPN"},

        ]
      }
    render(){
        return <div className="newsBox">
            <p id="newsTitle">News</p>
            {this.state.news.map((news) => {
              return <NewsCard key={uid(news)} news={news}/>
            }
            )}
        </div>
    }
}

export default NewsBox