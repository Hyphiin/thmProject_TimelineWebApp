import React, {useEffect, useRef, useState} from "react";
import addContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import {handleHoverExitItem, handleHoverItem, tlAnimationRight} from "./Animation";


console.log("timeline");
function Timeline () {
    let tlContainerA = useRef(null);
    let entriesA = useRef(null);

    useEffect(() => {
        tlAnimationRight(tlContainerA);
    })

    function clickHandler() {
        addEntry(addContent("get"));
    }

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