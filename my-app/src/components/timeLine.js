import React, {useState} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";



console.log("timeline");
 class Timeline extends React.Component{

     constructor(props) {
         super(props);
         this.state = {
             entries: this.props.entries
         }
     }


            render () {
               return <div id="timeline-export" className="timeline-container">
                    {editContent("","","","","get").map((entries, idx) => (
                        <TimeLineItem entries={entries} key={idx}/>
                    ))}
                </div>
            }

}
export default Timeline;