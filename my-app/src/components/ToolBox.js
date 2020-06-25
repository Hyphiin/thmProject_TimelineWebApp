import React from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import Export_Import from "./Export_Import";
import Screenshot from "./ScreenCapture";
import OptionsCSS from "./OptionsCSS.js";
import Print from "./Print.js";


function ToolBox() {
    return (
        <div className="toolbox_container" id="toolbox_container">
            <Add/>
            <Navigation/>
            <OptionsCSS/>
            <Export_Import/>
            <Screenshot/>
            <Print/>
        </div>
    )
}

export default ToolBox;