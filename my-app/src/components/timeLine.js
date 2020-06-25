import React, {useState} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import MapEntries from "./mapEntries";
import {
    timelineLine,
    timelineStagger,
    tlAnimationRight
} from "./Animation";
import {DragDropContext, Droppable} from "react-beautiful-dnd";


console.log("timeline");

class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: this.props.entries
        }
    }

    onDragEnd = (e) => {

    }

    render() {
        return (
            editContent("", "", "", "", "", "", "get").map((entries, idx) => (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={entries}>
                        {(provided) => (
                            <div
                                innerRef={provided.innerRef}
                                {...provided.droppableProps}
                                id="timeline-export" className="timeline-container">
                                <MapEntries/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

            ))
        )

    }


}

export default Timeline;