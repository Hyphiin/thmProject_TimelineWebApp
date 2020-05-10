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
            <span className="tag">
                {entries.category.tag}
            </span>
                <time>{entries.date}</time>
                <p>{text}</p>
                <span className="circle"/> {/*onClick={()=> console.log(addContent({}).length)}/>
                    <span className="circle2" onClick={() => clickHandler()}/>
                    <span className="circle3" onClick={() =>addContent({text: "bla", date:"09.08.98", tag:"last",color:"#514"})}/> */}
            </div>
        </div>
    )
}

export default TimeLineItem;