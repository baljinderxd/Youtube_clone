import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
function RecommendedVideos() {
    return (
        <div className="recomendedvideos">
            <h2>Recommended</h2>
            <div className="recommendedvideos_videos">
                <VideoCard 
                    title="Become a web Developer in 24 hours | 2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Sakshi"
                    image=""
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideos
