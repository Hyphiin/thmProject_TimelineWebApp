import React, {useState} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import MapEntries from "./mapEntries";
import {
    timelineLine,
    timelineStagger,
    tlAnimationRight
} from "./Animation";
import DropContainer from "./DropContainer";


console.log("timeline");

 class Timeline extends React.Component{

     constructor(props) {
         super(props);
         this.state = {
             entries: this.props.entries
         }
     }

     render() {
         return <DropContainer id="timeline-export" className="timeline-container">
             <MapEntries/>
         </DropContainer>
     }


}

export default Timeline;