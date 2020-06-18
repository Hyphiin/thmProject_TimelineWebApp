import domtoimage from "dom-to-image";
import React, {useEffect, useRef} from "react";
import {circlesStagger, hoverButton, hoverExitButton} from "./Animation";

const Screenshot = () => (
    <div id="wrapper">
         <button id ="export-container" onClick={capture}>
            Bild exportieren
         </button>
    </div>
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