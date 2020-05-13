import React, {useState} from "react";
import addContent from "./AddEntries"
import FileInput from "./FileInput";

function TimeLineItem ({entries}) {
    function clickHandler(mode) {
        if (mode==="add") {
            let eingabe = prompt("Inhalt eingeben.", "");
            if (eingabe !== "") {
                let dateObject = new Date();
                let currentDate = dateObject.toLocaleDateString();
                addContent(eingabe, currentDate, "new", addContent().indexOf(entries),"add");
            }
        }
        if (mode==="remove"){
            addContent("","","",addContent().indexOf(entries),"remove");
        }
    }
    const [text, setText] = useState(entries.text);//Übergeblieben, wichtig für Textchanges

    return (
        <div className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box">
            <span className="tag" >
                {entries.category.tag}
            </span>
                <time>{entries.date}</time>
                <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                </div>
                <FileInput/>
                <span className="circle" onClick={() => clickHandler("add")}/>
            </div>
        </div>
    )
}

export default TimeLineItem;