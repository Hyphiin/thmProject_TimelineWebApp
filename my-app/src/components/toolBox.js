import React from "react";
import Add from "./Add";
import cssOptions from "./cssOptions";

function Toolbox () {

    return(
    <div id="toolbox_container">
        <p id="toolbox_header">Toolbox</p>
        <Add/>
        <br></br>
        <p id="cssOptions-header">Formatierungsoptionen</p>
        <cssOptions/>
    </div>
    )
}

export default Toolbox;