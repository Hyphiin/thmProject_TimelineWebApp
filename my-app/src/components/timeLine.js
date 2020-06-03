import React, {useState} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import MapEntries from "./mapEntries";



 class Timeline extends React.Component{

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