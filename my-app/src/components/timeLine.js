import React from "react";
import entry from "./entries";
import TimeLineItem from "./timeLineItem";

const Timeline = () => entry.length > 0 && (
    <div className="timeline-container">
        {entry.map((entries, idx) => (
            <TimeLineItem entries={entries} key={idx}/>
        ))}
    </div>
);
export default Timeline;