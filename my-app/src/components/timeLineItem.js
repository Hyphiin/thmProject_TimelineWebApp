import React, {useState, useEffect, useRef} from "react";
import addContent from "./AddEntries"
import FileInput from "./FileInput";

import {
    circlesStagger, handleHoverCircle, handleHoverExitCircle, handleHoverExitItem, handleHoverItem,
} from "./Animation";

function TimeLineItem ({entries}) {
    let tagA = useRef(null);
    let circle1A = useRef(null);
    let circle2A = useRef(null);
    let fileA = useRef(null);
    let timeA = useRef(null);


    
    function clickHandler(mode) {
        localStorage.setItem("mode","neutral");
        if (mode==="add") {
                addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), addContent().indexOf(entries),"add");
                circlesStagger(circle1A);
                 circlesStagger(circle2A);
        }
        if (mode==="delete"){
            addContent("","","",addContent().indexOf(entries),"delete");
        }
        if (mode==="edit"){
            addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),addContent().indexOf(entries),"edit");
        }
    }

    useEffect(() => {
        circlesStagger(circle1A);
        circlesStagger(circle2A);
    })

    return (
        <div className="timeline-item">
            <div  className="timeline-item-content" >
                <div className="box">
            <span ref={el => (tagA = el)} className="tag" >
                {entries.category.tag}
            </span>
                <time ref={el => (timeA = el)} >{entries.date}</time>
                <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                </div>
                <div ref={el => (fileA = el)} className="file-input-content">
                <FileInput/>
                </div>
                <span onMouseEnter={e => handleHoverCircle(e)}
                      onMouseOut={e => handleHoverExitCircle(e)}
                      ref={el => (circle1A = el)} className="circle1" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
                <span onMouseEnter={e => handleHoverCircle(e)}
                      onMouseOut={e => handleHoverExitCircle(e)}
                      ref={el => (circle2A = el)} className="circle2" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
            </div>
        </div>
    )
}

export default TimeLineItem;