import React, {useEffect, useRef} from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import gsap from "gsap";
import Export_Import from "./Export_Import";
import {circlesStagger} from "./Animation";
import Screenshot from "./screenCapture";
import CssOptions from "./cssOptions.js";
import Print from "./print.js";


function Toolbox () {
    return(
    <div className="toolbox_container" id="toolbox_container">
        <Add/>
        <Navigation/>
        <CssOptions/>
        <Export_Import/>
        <Screenshot/>
        <Print/>
    </div>
    )
}

export default Toolbox;