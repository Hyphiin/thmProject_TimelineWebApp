import React, {useEffect, useRef} from "react";
import Add from "./Add";
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
    </div>
    )
}

export default Toolbox;