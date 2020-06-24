import React, {useState, useRef} from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import LocalStorageSave from "./LocalStorageSave";
import LocalStorageUsage from "./localStorageUsage";

let dragging = false;
let allEntries = editContent("", "", "", "", "", "", "", "get");

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
        this.dragNode.current.addEventListener('dragend', this.handleDragEnd);
        setTimeout(() => {
            dragging = true;
        }, 0);
    }

    handleDragEnter = (e, id) => {
        if(e.target !== this.dragNode.current){
            console.log("Drag enter", id);
        }
    }

    handleDragEnd = () => {
        console.log("Drag end on: ");
        this.dragNode.current.removeEventListener('dragend', this.handleDragEnd);
        this.dragItem.current = null;
        this.dragNode.current = null;
        dragging = false;
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
                 onDragStart={(e) => {this.handleDragStart(e, {idx})}}
                 onDragEnter={(e) => {this.handleDragEnter(e, {idx})}}
                 >
                <TimeLineItem entries={entries} key={idx}/>
            </div>
        ))
    }

}

export default MapEntries;



