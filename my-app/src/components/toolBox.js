import React, {useEffect, useRef} from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import IconInsert from "./IconInsert";
import Export_Import from "./Export_Import";
import {
    circlesStagger,
    ersteAnimation,
    h1Animation, hoverExitItem,
    hoverItem,
    tlAnimationRight,
    toolboxFadeIn,
    toolboxHeader
} from "./Animation";

function Toolbox () {
    /*Animation*/
    let toolbox_containerA = useRef(null);
    let toolbox_headerA = useRef(null);
    useEffect(() => {
        toolboxHeader(toolbox_headerA);
    })



    return(
    <div  ref={el => (toolbox_containerA = el)} id="toolbox_container">
        <p ref={el => (toolbox_headerA = el)} id="toolbox_header">Toolbox</p>
        <Add/>
        <Navigation/>
        <Export_Import/>
    </div>
    )
}

export default Toolbox;