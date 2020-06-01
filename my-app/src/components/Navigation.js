import React, {useState} from "react";
import editContent from "./AddEntries";
import LocalStorageUsage from "./localStorageUsage";

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: this.props.i
        }
    }

    setTimeline(direction) {
        let i=parseInt(localStorage.getItem("position"));
        if(isNaN(i)===true){
            i=1;
        }
        if (direction==="next") {
            if (i<localStorage.getItem("nuOfTimelines")) {
                i++;
            }
            localStorage.setItem("position",i.toString());
            console.log(localStorage.getItem("position"));
            editContent("", "", "", "", "nav");
        }
        if (direction==="prev"){
            if (i>1) {
                i--;
            }
            localStorage.setItem("position",i.toString());
            editContent("", "", "", "", "nav");
        }
    }

    newTimeline(){
        let i=parseInt(localStorage.getItem("nuOfTimelines"));
        console.log(localStorage.getItem("nuOfTimelines"));
        if(isNaN(i)===true){
            i=1;
        }
        i++;
        localStorage.setItem("nuOfTimelines",i.toString());
        localStorage.setItem("position",i.toString());
        editContent("", "", "", "", "new");
    }

    deleteTimeline(){
        let i=parseInt(localStorage.getItem("nuOfTimelines"));
        if(isNaN(i)===true){

        }
        else {
            i--;
            localStorage.setItem("nuOfTimelines", i.toString());
            console.log(localStorage.getItem("position"));
            localStorage.removeItem("allEntries"+localStorage.getItem("position"));
            this.setTimeline("prev");
        }
    }


    render() {
        return <div id="navButtons">
                    <a className="prev" href="#" onClick={() =>this.setTimeline("prev")} >&#8249;</a>
                    <a className="next" href="#" onClick={() =>this.setTimeline("next")}>&#8250;</a>
                    <button className="addBtn" onClick={() =>this.newTimeline()}> Neue Timeline <br/> anlegen</button>
                    <button className="deleteBtn" onClick={() =>this.deleteTimeline()}>Aktuelle Timeline  <br/> löschen </button>
                    <p onClick={() =>localStorage.clear()}>Seite {localStorage.getItem("position")||1} von {localStorage.getItem("nuOfTimelines")||1}</p>
                </div>
    }
}
export default Navigation;