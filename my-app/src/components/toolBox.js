import React from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import IconInsert from "./IconInsert";
import Export_Import from "./Export_Import";

function Toolbox () {



    return(
    <div id="toolbox_container">
        <p id="toolbox_header">Toolbox</p>
        <Add/>
        <Navigation/>
        <Export_Import/>
    </div>
    )
}

export default Toolbox;