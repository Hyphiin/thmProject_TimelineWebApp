import React, {useState, useRef} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import LocalStorageSave from "./LocalStorageSave";
import LocalStorageUsage from "./localStorageUsage";

let dragging = false;

class MapEntries extends React.Component {
    constructor(props) {
        super(props);
        this.dragItem = React.createRef();
        this.dragNode = React.createRef();
    }



    handleDragStart = (e, id) => {
        console.log("Drag start", id);
        this.dragItem.current = id;
        this.dragNode.current = e.target;
        dragging = true;
        console.log("Current: ", this.dragNode);
    }

    handleDragEnter = (e, id) => {
        console.log("Drag enter", id);
    }

    handleDragEnd = () => {
        console.log("Drag end");
        dragging = false;
        console.log(dragging);
    }


    render() {
        let i = parseInt(localStorage.getItem("nuOfTimelines"));
        if (isNaN(i) === true) {
            console.log("drinne");
            i = 1;
            localStorage.setItem("nuOfTimelines", i.toString());
            localStorage.setItem("position", i.toString());
            editContent("", "", "", "", "", "", "", "new");
        }

        return editContent("", "", "", "", "", "", "", "get").map((entries, idx) => (
            <div draggable={true}
                 onDragStart={(e) => this.handleDragStart(entries, idx)}
                 onDragEnter={(e) => {this.handleDragEnter(e, {entries, idx})}}
                 onDragEnd={this.handleDragEnd}>
                <TimeLineItem entries={entries} key={idx}/>
            </div>
        ))
    }

}

export default MapEntries;



