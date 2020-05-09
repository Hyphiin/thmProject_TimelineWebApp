import React, {useState} from "react";
import entry from "./entries";



function TimeLineItem ({entries}) {
    function clickHandler() {
        let eingabe=prompt("Inhalt eingeben.", "");
        if (eingabe!=""){
            setText(eingabe);
        }
    }
    const [text, setText] = useState(entries.text);
    const onChange = event => setText(event.target.text);
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
            <span className="tag" style={{background: entries.category.color}}>
                {entries.category.tag}
            </span>
                <time>{entries.date}</time>
                <p>{text}</p>
                <div className="circles" onClick={() => clickHandler()}>
                    <span className="circle1"/>
                    <span className="circle2"/>
                    <span className="circle3"/>
                </div>
            </div>
        </div>
    )
}

export default TimeLineItem;