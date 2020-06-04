import React, {useEffect, useRef} from "react";
import Add from "./Add";
import Navigation from "./Navigation";
import gsap from "gsap";
import Export_Import from "./Export_Import";
import {
    toolboxHeader
} from "./Animation";

function Toolbox () {
    /*Animation*/
    let toolbox_containerA = useRef(null);
    let toolbox_headerA = useRef(null);
    useEffect(() => {
        gsap.from(toolboxHeader(), {
            x: 400,
            duration: 2,
            delay: -1,
            opacity: 0.5,
            ease: "power3.inOut"
        });
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