import React, {useState} from "react";
import editContent from "./AddEntries";
import LocalStorageUsage from "./localStorageUsage";
import {hoverButton, hoverExitButton} from "./Animation";
import gsap from "gsap";

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
            editContent("", "", "", "","", "","nav");
        }
        if (direction==="prev"){
            if (i>1) {
                i--;
            }
            localStorage.setItem("position",i.toString());
            editContent("", "", "", "","", "","nav");
        }
    }

    newTimeline(){
        let i=parseInt(localStorage.getItem("nuOfTimelines"));
        if(isNaN(i)===true){
            i=1;
        }
        i++;
        localStorage.setItem("nuOfTimelines",i.toString());
        localStorage.setItem("position",i.toString());
        editContent("", "", "", "","", "","nav");
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

    /* Animation ToolBox unten*/
    componentDidMount() {
        let tl = gsap.timeline();
        console.clear();
        console.log( this.addBtn);
        console.log( this.deleteBtn);
        console.log( this.prev);
        console.log( this.next);
        console.log( this.pTag);
        tl.from(this.prev, {duration: 0.9, delay: -0.3, opacity: 0, scale: 0.9});
        tl.from(this.next, {duration: 0.9, delay: -0.6, opacity: 0, scale: 0.9});
        tl.from(this.addBtn, {duration: 0.9, delay: -0.7, opacity: 0, scale: 0.9});
        tl.from(this.deleteBtn, {duration: 0.9, delay: -0.7, opacity: 0, scale: 0.9});
        tl.from(this.pTag, {duration: 0.9, delay: -0.8, opacity: 0, scale: 0.9});
    }

    render() {
        return <div id="navButtons">
                    <a ref={ e => this.prev = e } className="prev" href="#" onClick={() =>this.setTimeline("prev")} >&#8249;</a>
                    <a ref={ e => this.next = e } className="next" href="#" onClick={() =>this.setTimeline("next")}>&#8250;</a>
                    <button  onMouseEnter={e => hoverButton(e)}
                             onMouseOut={e => hoverExitButton(e)} ref={ e => this.addBtn = e }
                             className="addBtn" onClick={() =>this.newTimeline()}> Neue Timeline <br/> anlegen</button>
                    <button  onMouseEnter={e => hoverButton(e)}
                             onMouseOut={e => hoverExitButton(e)} ref={ e => this.deleteBtn = e }
                             className="deleteBtn" onClick={() =>this.deleteTimeline()}>Aktuelle Timeline  <br/> löschen </button>
                    <p ref={ e => this.pTag = e } onClick={() =>localStorage.clear()}>Seite {localStorage.getItem("position")||1} von {localStorage.getItem("nuOfTimelines")||1}</p>
                </div>
    }
}
export default Navigation;