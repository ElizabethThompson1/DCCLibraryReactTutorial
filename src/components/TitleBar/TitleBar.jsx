import React from "react";
import './TitleBar.css'

function TitleBar (propr){
    return(
        <div className = "row row-space">
            <div class = "col-md-12" style={{padding: 0 }}>
                 <div className = "titlebar-nav">
                 <h1> dcc Library </h1>
                </div>  
            </div>
        </div>
    )
}
export default TitleBar;