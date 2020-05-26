import React, {useState} from "react";
import addContent from "./AddEntries"
import FileInput from "./FileInput";
import IconResult from "./IconResult";

function TimeLineItem ({entries}) {
    
    function clickHandler(mode) {
        localStorage.setItem("mode","neutral");
        if (mode==="add") {
            addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),localStorage.getItem("icon"), addContent().indexOf(entries),"add");
        }
        if (mode==="delete"){
            addContent("","","","", addContent().indexOf(entries),"delete");
        }
        if (mode==="edit"){
            addContent(localStorage.getItem("text"), localStorage.getItem("date"),localStorage.getItem("icon"), localStorage.getItem("tag"),addContent().indexOf(entries),"edit");
        }

    }


    return (
        <div className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box">
                    <span className="tag" >
                        {entries.category.tag}
                    </span>
                    <time>{entries.date}</time>
                    <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                    <p>
                        <IconResult/>
                    </p>
                </div>
                <span className="circle" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
            </div>
        </div>
    )
}

export default TimeLineItem;