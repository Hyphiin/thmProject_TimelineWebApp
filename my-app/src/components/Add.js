import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {
    hoverButton, hoverExitButton
} from "./Animation";
import IconInsert from "./IconInsert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LocalStorageUsage from "./localStorageUsage";
import editContent from "./AddEntries";

export default class Add extends React.Component{
    state = {
        date: "",
        description: "",
        tag: "",
    };

    onSubmit = (e, mode) => {
        e.preventDefault();
        console.log(this.state);
        localStorage.setItem("text",this.state.description);
        localStorage.setItem("date", this.state.date);
        localStorage.setItem("tag",this.state.tag);
        if (mode==="add"){
            if (LocalStorageUsage().length===0){
                editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), 0,"add");
            }
            else {
                localStorage.setItem("mode", "add");
            }
        }
        if (mode==="edit"){
            localStorage.setItem("mode","edit");
        }
        if (mode==="delete"){
            localStorage.setItem("mode","delete");
        }
        this.setState({date: "",
            description: "",
            tag: "",})
    };

    /* Animation */
    componentDidMount() {
        let tl = gsap.timeline();
        console.clear();
        console.log( this.description);
        console.log( this.tag);
        console.log( this.date);
        console.log( this.button_add);
        console.log( this.button_edit);
        console.log( this.button_delete);
        tl.from(this.description, {x: 400, duration: 1, delay: -0.8, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.tag, {x: 400, duration: 1, delay: -0.8, opacity: 0.5, ease: "power3.inOut"})
        tl.from(this.date, {x: 400, duration: 1, delay: -0.8, opacity: 0.5, ease: "power3.inOut"})
        tl.from(this.button_add, {x: 400, duration: 1, delay: -0.8, opacity: 0.5, ease: "power3.inOut"})
        tl.from(this.button_edit, {x: 400, duration: 1, delay: -0.8, opacity: 0.5, ease: "power3.inOut"})
        tl.from(this.button_delete, {x: 400, duration: 1, delay: -0.8, opacity: 0.5, ease: "power3.inOut"})
    }

    render(){
        return (
            <form id="form">
                <div id="form_input">
                    <textarea ref={ e => this.description = e } id="form_desc" rows="5" placeholder='Beschreibung' value={this.state.description} onChange={e => this.setState({description: e.target.value})}></textarea>
                    <input ref={ e => this.tag = e } id="form_tag" placeholder='Tag' value={this.state.tag} onChange={e => this.setState({tag: e.target.value})}/>
                    <input ref={ e => this.date = e } id="form_date" type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                    <IconInsert/>
                </div>
                <div id="form_button">
                    <button onMouseEnter={e => hoverButton(e)}
                            onMouseOut={e => hoverExitButton(e)}
                            ref={ e => this.button_add = e } id="form_button_add" onClick={(e) => this.onSubmit(e,"add")}>Eintrag erstellen</button>
                    <var className="divider"></var>
                    <button onMouseEnter={e => hoverButton(e)}
                            onMouseOut={e => hoverExitButton(e)}
                            ref={ e => this.button_edit = e } id="form_button_edit" onClick={(e) => this.onSubmit(e,"edit")}>Eintrag bearbeiten</button>
                    <var className="divider"></var>
                    <button onMouseEnter={e => hoverButton(e)}
                            onMouseOut={e => hoverExitButton(e)}
                            ref={ e => this.button_delete = e } id="form_button_delete" onClick={(e) => this.onSubmit(e,"delete")}>Eintrag löschen</button>
                </div>
            </form>
        )
    }
}
{/*
aktuell wird noch der letzte punkt aus dem localStorage nicht abgespeichert, evtl auf nen andren OnClick oder ähnliches
*/}