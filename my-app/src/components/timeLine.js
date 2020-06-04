import React, {useState} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import MapEntries from "./mapEntries";
import {
    hoverExitTimeline,
    hoverTimelineItem,
    tlAnimationRight
} from "./Animation";


console.log("timeline");

 class Timeline extends React.Component{
    /*Animation*/
    let tlContainerA = useRef(null);
    useEffect(() => {

    })

     constructor(props) {
         super(props);
         this.state = {
             entries: this.props.entries
         }
     }

                render()
     {
         return <div id="timeline-export" className="timeline-container">
             <MapEntries/>
         </div>
     }


}

export default Timeline;