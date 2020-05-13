import React, {useState} from "react";
import addContent from "./AddEntries"

function TimeLineItem ({entries}) {
    function clickHandler() {
        let eingabe=prompt("Inhalt eingeben.", "");
        if (eingabe!==""){
            setText(eingabe);
        }
    }
    const [text, setText] = useState(entries.text);
    const onChange = event => setText(event.target.text);
    return (
        <div className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box" onClick={() => clickHandler()}>
            <span className="tag" >
                {entries.category.tag}
            </span>
                <time>{entries.date}</time>
                <p>{text}</p>
                </div>
                <span className="circle" onClick={() => addContent("test","34.09.3999","last")}/>
            </div>
        </div>
    )
}

export default TimeLineItem;