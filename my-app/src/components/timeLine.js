import React, {useState} from "react";
import addContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import test from "./returnNewArray"


console.log("timeline");
function Timeline () {
    const [entry, addEntry] = useState(addContent());
        for(let idx = 0; idx < addContent().length; idx++) {
            return (
                <div className="timeline-container" onClick={() => addEntry(addContent())}>
                    {addContent().map((entries, idx) => (
                        <TimeLineItem entries={entries} key={idx}/>
                    ))}
                </div>
            )
        }
}
export default Timeline;