import domtoimage from "dom-to-image";
import React, {useEffect, useRef} from "react";
import {circlesStagger, hoverButton, hoverExitButton} from "./Animation";

const Screenshot = () => (

    <a href="#" className="cta" onClick={capture}>
        <span className="span"> Bild exportieren</span>
         <svg className="svg" width="13px" height="10px" viewBox="0 0 13 10">
             <path d="M1,5 L11,5"></path>
             <polyline points="8 1 12 5 8 9"></polyline>
         </svg>
    </a>

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