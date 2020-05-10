import React, {useState} from "react";
import addContent from "./AddEntries"




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
                <div className="circles" >
                    <span className="circle1" onClick={()=> console.log(addContent({}).length)}/>
                    <span className="circle2" onClick={() => clickHandler()}/>
                    <span className="circle3" onClick={() =>addContent({text: "bla", date:"09.08.98", tag:"last",color:"#514"})}/>
                </div>
            </div>
        </div>
    )
}

export default TimeLineItem;