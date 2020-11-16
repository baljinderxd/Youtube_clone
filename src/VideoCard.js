import { Avatar } from '@material-ui/core'
import React from 'react'

function Video({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div>
           <img src="" alt="" />
           <div className="videoCard_info">
            <Avatar 
             className="videoCard_avatar"
             alt={channel}
             src={channelImage} 
            />
            <div className="video_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
           </div>

        </div>
    )
}

export default Video
