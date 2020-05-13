import React, {useState} from "react";
import addContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";



console.log("timeline");
function Timeline () {
    function clickHandler() {
        addEntry(addContent("get"));
    }

    const [eintrag, addEntry] = useState(addContent());
    console.log(eintrag);
            return (
                <div className="timeline-container" onClick={() => clickHandler()}>
                    {eintrag.map((entries, idx) => (
                        <TimeLineItem entries={entries} key={idx}/>
                    ))}
                </div>
            )

}
export default Timeline;