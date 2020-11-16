import React from 'react'
import './VideoRow.css'

function VideoRow({image,channel,subs,nov,desc,verified}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className=".videoRow_headline">
                    {channel} .{" "} 
                    <span className="videoRow_subs">
                    <span className="videoRow_subNumber">{subs} Subscribers</span>
                    </span>{" "}  
                    {views} views . {timestamp}
                </p>
                <p className="videoRow_description">{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow
