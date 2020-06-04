import domtoimage from "dom-to-image";
import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";

const Screenshot = () => (
    <button  onMouseEnter={e => hoverButton(e)}
             onMouseOut={e => hoverExitButton(e)}
             id ="export-container" onClick={capture}>
        Export
    </button>
);

function capture(){
    let node = document.getElementById('timeline-export');
    domtoimage.toPng(node).then(function (dataUrl){
        let text ="<img src="+dataUrl+" alt='viewport'>";
        let pic = window.open("about:blank", "Export");
        pic.document.write(text);
    })
}

export default Screenshot;