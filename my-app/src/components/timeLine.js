import React from "react";
import addContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import test from "./returnNewArray"


console.log("timeline");
const Timeline = () => addContent({}).length > 0 && (
    <div className="timeline-container">
        {addContent({}).map((entries, idx) => (
            <TimeLineItem entries={entries} key={idx}/>
        ))}
    </div>

);
export default Timeline;