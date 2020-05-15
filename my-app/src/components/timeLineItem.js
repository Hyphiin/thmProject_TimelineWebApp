import React, {useState, useEffect, useRef} from "react";
import addContent from "./AddEntries"
import FileInput from "./FileInput";
import gsap from 'gsap';

function TimeLineItem ({entries}) {
    let content = useRef(null);

    useEffect(() => {
        gsap.to(content, {duration: 2, ease: 'bounce', rotate: 360})
    })
    
    function clickHandler(mode) {
        localStorage.setItem("mode","neutral");
        if (mode==="add") {
                addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), addContent().indexOf(entries),"add");
        }
        if (mode==="delete"){
            addContent("","","",addContent().indexOf(entries),"delete");
        }
        if (mode==="edit"){
            addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),addContent().indexOf(entries),"edit");
        }
        

    }


    return (
        <div ref={el => content = el} className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box">
            <span className="tag" >
                {entries.category.tag}
            </span>
                <time>{entries.date}</time>
                <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                </div>
                <FileInput/>
                <span className="circle" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
            </div>
        </div>
    )
}

export default TimeLineItem;