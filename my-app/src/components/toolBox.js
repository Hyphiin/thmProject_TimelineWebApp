import React from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import IconInsert from "./IconInsert";

function Toolbox () {



    return(
    <div id="toolbox_container">
        <p id="toolbox_header">Toolbox</p>
        <Add/>
        <Navigation/>
    </div>
    )
}

export default Toolbox;