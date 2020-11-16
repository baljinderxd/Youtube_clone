import React from 'react'
import './sidebarRow.css'
/* import HomeIcon from "@material-ui/icons/Home"  */

function SidebarRow({Icon , title}) {
    return (
        <div className="sidebarRow">
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarRow
