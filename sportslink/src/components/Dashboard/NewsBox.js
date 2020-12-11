import React from 'react'
import {uid} from 'react-uid'
import NewsCard from './NewsCard'

class NewsBox extends React.Component{
    state = {
        news: [{title: 'Should the Toronto Raptors pursue Houston Rockets superstar James Harden?', date: "December 9, 2020", source: "NBA", 
                link: 'https://ca.nba.com/news/should-the-toronto-raptors-pursue-houston-rockets-superstar-james-harden/140z18zyo0c2t1ps42fvfjuvf2'},
                {title: '5 NBA players poised for a breakout season', date: "December 7, 2020", source:"theScore", 
                link: 'https://www.thescore.com/nba/news/2063377'},
                {title: 'NCAA March Madness basketball games will be played without fans', date: "March 11, 2020", source: "CNBC", 
        link: 'https://www.cnbc.com/2020/03/11/ncaa-march-madness-basketball-games-will-be-closed-to-public-spectators.html'}]
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