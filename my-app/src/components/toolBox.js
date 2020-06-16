import React, {useEffect, useRef} from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import gsap from "gsap";
import Export_Import from "./Export_Import";
import {circlesStagger} from "./Animation";
import CssOptions from "./cssOptions.js";


function Toolbox () {
    return(
    <div id="toolbox_container">
        <Add/>
        <Navigation/>
        <Export_Import/>
        <CssOptions/>
    </div>
    )
}

export default Toolbox;