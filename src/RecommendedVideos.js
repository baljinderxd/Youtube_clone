import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
function RecommendedVideos() {
    return (
        <div className="recommendedvideos">
            <h2>Recommended</h2>
            <div className="recommendedvideos_videos">
                <VideoCard 
                    title="Go Melodious | 2019"
                    views="10K Views"
                    timestamp="1 year ago"
                    channelImage="https://tse4.mm.bing.net/th?id=OIP.032pukClfuqpSCu9Ae3ZCQHaNK&pid=Api&P=0&w=300&h=300"
                    channel="AnSuNi AaWaZ"
                    image="https://tse1.mm.bing.net/th?id=OIP.S_Sf7fy0jFdqpeTeXGcSugHaEo&pid=Api&P=0&w=307&h=193"
                />
                <VideoCard
                title="What goes next in TVD | 2016"
                views="1M Views"
                timestamp="4 years ago"
                channelImage="https://tse4.mm.bing.net/th?id=OIP.wWraRVqvsOx2xw1n7QQFdgHaFj&pid=Api&P=0&w=210&h=158"
                channel="TVD_Officials"
                image="https://tse4.mm.bing.net/th?id=OIP.wWraRVqvsOx2xw1n7QQFdgHaFj&pid=Api&P=0&w=210&h=158"                
                />
                <VideoCard 
                title="Learn Code Online | 2020"
                views="50K Views"
                timestamp="3 weeks ago"
                channelImage="https://tse3.explicit.bing.net/th?id=OIP.oBqHYc72ePLtp2b_ghM7sQAAAA&pid=Api&P=0&w=300&h=300"
                channel="Hitesh"
                image="https://tse4.mm.bing.net/th?id=OIP.tzxcac9eC7wqjlZoBU20sgHaE8&pid=Api&P=0&w=235&h=158"                
                />
                <VideoCard
                title="Become a python Developer in 24 hours | 2020"
                views="2M Views"
                timestamp="5 days ago"
                channelImage="https://tse3.mm.bing.net/th?id=OIP.7EUX9QIjq2x1JyFKcjhXsAHaDv&pid=Api&P=0&w=252&h=128"
                channel="Sakshi"
                image="https://tse2.mm.bing.net/th?id=OIP.HN9pSKvH7QJbe0CsYpHjbQHaDt&pid=Api&P=0&w=375&h=188"                
                />
                <VideoCard
                title="Become a web Developer in 24 hours | 2020"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage="https://tse4.mm.bing.net/th?id=OIP.IYEk3coWpHrwVqSmdx1AtQHaF3&pid=Api&P=0&w=227&h=181"
                channel="Sakshi"
                image="https://tse2.mm.bing.net/th?id=OIP._-a2s6dX0n34l17rQPcHJwHaDt&pid=Api&P=0&w=318&h=160"                
                />
                <VideoCard
                title="Ian Somerhalder | 2017"
                views="5M Views"
                timestamp="3 years ago"
                channelImage="https://tse3.mm.bing.net/th?id=OIP.nT7bDTQCqvLzFY7VXl_tOgEHEs&pid=Api&P=0&w=300&h=300"
                channel="Ian"
                image="https://tse4.mm.bing.net/th?id=OIP.SbhpasAjeBwgtCVH_mv4DQHaD5&pid=Api&P=0&w=308&h=163"                
                />
                <VideoCard
                title="Longest Increasing Subsequence dp | 2010"
                views="10K Views"
                timestamp="10 years ago"
                channelImage="https://tse1.mm.bing.net/th?id=OIP.4UxP4T_hTNUihERXp-8M4gHaEN&pid=Api&P=0&w=271&h=155"
                channel="TechDose"
                image="https://tse1.mm.bing.net/th?id=OIP.0SMGixBwqTr6HZIAoouB1gHaD4&pid=Api&P=0&w=291&h=154"                
                />
                <VideoCard 
                title="Friends Cast | 2020"
                views="8M Views"
                timestamp="3 days ago"
                channelImage="https://tse2.mm.bing.net/th?id=OIP.dZl6qoBelVEsRl0NJ-kggAHaEK&pid=Api&P=0&w=282&h=160"
                channel="ChandlerBong"
                image="https://tse3.mm.bing.net/th?id=OIP.928DGZj05q_mkbUuy_m1VQAAAA&pid=Api&P=0&w=220&h=152"                
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
