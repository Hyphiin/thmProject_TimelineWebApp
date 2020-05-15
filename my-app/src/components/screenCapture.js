import domtoimage from "dom-to-image";
import React from "react";

const Screenshot = () => (
    <button id ="export-container" onClick={capture}>
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