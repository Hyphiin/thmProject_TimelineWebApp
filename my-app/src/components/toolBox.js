import React, {useEffect, useRef} from "react";
import Add from "./Add";
import {circlesStagger, ersteAnimation, tlAnimationRight, toolboxFadeIn} from "./Animation";

function Toolbox () {
    let toolbox_containerA = useRef(null);
    let toolbox_headerA = useRef(null);

    useEffect(() => {
        toolboxFadeIn(toolbox_containerA);
        ersteAnimation(toolbox_headerA);
    })

    return(
    <div ref={el => (toolbox_containerA = el)} id="toolbox_container">
        <p ref={el => (toolbox_headerA = el)} id="toolbox_header">Toolbox</p>
        <Add/>
    </div>
    )
}

export default Toolbox;