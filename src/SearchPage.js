import React from 'react'
import TunedOutlinedIcon from "@material-ui/icons/TabOutlined"
import './SearchPage.css'
import ChannelRow from "./ChannelRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TunedOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://tse4.mm.bing.net/th?id=OIP.tzxcac9eC7wqjlZoBU20sgHaE8&pid=Api&P=0&w=235&h=158"
            channel="LearnCode"
            verified
            subs="10K"
            nov={400}
            desc="Learn Code Online" 
            />
        </div>
    )
}

export default SearchPage
