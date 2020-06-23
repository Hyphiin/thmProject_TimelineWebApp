import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {
    clickButtonAdd,
    clickButtonEdit,
    hoverButton, hoverErstellenButton, hoverExitButton, hoverExitErstellenButton, timelineStagger
} from "./Animation";
import IconInsert from "./IconInsert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LocalStorageUsage from "./localStorageUsage";
import editContent from "./AddEntries";
import FileInput from "./FileInput";

export default class Add extends React.Component{
    state = {
        id: "",
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
                editContent(localStorage.getItem("id"), localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),localStorage.getItem("icon"),localStorage.getItem("file"), 0,"add");
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
            tag: ""})
    };

    /* Animation ToolBox oben*/
    componentDidMount() {
        console.clear();
        let tl = gsap.timeline();
        console.log( this.header);
        console.log( this.description);
        console.log( this.tag);
        console.log( this.date);
        console.log( this.button_add);
        console.log( this.button_edit);
        console.log( this.button_delete);
        tl.from(this.header, {x: 400, duration: 1.2, delay: -0.8, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.description, {x: 600, duration: 0.8, delay: -0.8, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.tag, {x: 600, duration: 0.8, delay: -0.6, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.date, {x: 600, duration: 0.8, delay: -0.6, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.button_add, {x: 600, duration: 0.8, delay: -0.7, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.button_edit, {x: 600, duration: 0.8, delay: -0.8, opacity: 0.5, ease: "power3.inOut"});
        tl.from(this.button_delete, {x: 600, duration: 0.8, delay: -0.9, opacity: 0.5, ease: "power3.inOut"});
    }

    render(){
        return (
            <form id="form" className="form">
                <p  className="theader" ref={ e => this.header = e } id="toolbox_header">Toolbox</p>
                <div className="form_input" id="form_input">
                    <textarea className="desc" ref={ e => this.description = e } id="form_desc" rows="5" placeholder='Beschreibung' value={this.state.description} onChange={e => this.setState({description: e.target.value})}></textarea>
                    <input className="tag" ref={ e => this.tag = e } id="form_tag" placeholder='Tag' value={this.state.tag} onChange={e => this.setState({tag: e.target.value})}/>
                    <input className="date" ref={ e => this.date = e } id="form_date" type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                    <p className="iinsert"><IconInsert/></p>
                    <p className="finsert"><FileInput/></p>
                </div>
                <div id="form_button" className="formbutton">
                    <button onMouseEnter={e => hoverErstellenButton(e)}
                            onMouseOut={e => hoverExitErstellenButton(e)}
                            onClickCapture={e => clickButtonAdd()}
                            ref={ e => this.button_add = e } class= "button" id="form_button_add" onClick={(e) => this.onSubmit(e,"add")}>Eintrag erstellen</button>
                    <var className="divider"></var>
                    <button onMouseEnter={e => hoverErstellenButton(e)}
                            onMouseOut={e => hoverExitErstellenButton(e)}
                            onClickCapture={e => clickButtonEdit()}
                            ref={ e => this.button_edit = e } class= "button" id="form_button_edit" onClick={(e) => this.onSubmit(e,"edit")}>Eintrag bearbeiten</button>
                    <var className="divider"></var>
                    <button onMouseEnter={e => hoverErstellenButton(e)}
                            onMouseOut={e => hoverExitErstellenButton(e)}
                            onClickCapture={e => clickButtonEdit()}
                            ref={ e => this.button_delete = e } class= "button" id="form_button_delete" onClick={(e) => this.onSubmit(e,"delete")}>Eintrag löschen</button>
                </div>
            </form>
        )
    }
}