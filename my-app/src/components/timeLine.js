import React, {useState} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";



console.log("timeline");
function Timeline () {
    function clickHandler() {
        addEntry(editContent("get"));
    }
    const [eintrag, addEntry] = useState(editContent());
    console.log(eintrag);
            return (
                <div id="timeline-export" className="timeline-container" onClick={() => clickHandler()}>
                    {eintrag.map((entries, idx) => (
                        <TimeLineItem entries={entries} key={idx}/>
                    ))}
                </div>
            )

}
export default Timeline;