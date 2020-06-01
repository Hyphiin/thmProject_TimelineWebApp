import React, {useEffect, useRef, useState} from "react";
import addContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import {
    hoverExitTimeline,
    hoverTimelineItem,
    tlAnimationRight
} from "./Animation";


console.log("timeline");
function Timeline () {

    function clickHandler() {
        addEntry(addContent("get"));
    }

    /*Animation*/
    let tlContainerA = useRef(null);
    useEffect(() => {

    })

    const [eintrag, addEntry] = useState(addContent());
    console.log(eintrag);
            return (
                <div ref={el => (tlContainerA = el)} id="timeline-export" className="timeline-container" onClick={() => clickHandler()}>
                    {eintrag.map((entries, idx) => (
                        <TimeLineItem entries={entries} key={idx}/>
                    ))}
                </div>
            )

}
export default Timeline;