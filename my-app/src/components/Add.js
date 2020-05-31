import React from "react";
import LocalStorageSave from "./LocalStorageSave";

export default class Add extends React.Component{
    state = {
        date: "",
        description: "",
        tag: "",
    }

    onSubmit = (e, mode) => {
        e.preventDefault();
        console.log(this.state);
        localStorage.setItem("text",this.state.description);
        localStorage.setItem("date", this.state.date);
        localStorage.setItem("tag",this.state.tag);
        if (mode==="add"){
            localStorage.setItem("mode", "add");
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

    render(){
        return (
            <form id="form">
                <div id="form_input">
                    <textarea id="form_desc" rows="5" placeholder='Beschreibung' value={this.state.description} onChange={e => this.setState({description: e.target.value})}></textarea>
                    <input id="form_tag" placeholder='Tag' value={this.state.tag} onChange={e => this.setState({tag: e.target.value})}/>
                    <input id="form_date" type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                </div>
                <div id="form_button">
                    <button id="form_button_add" onClick={(e) => this.onSubmit(e,"add")}>Eintrag erstellen</button>
                    <var className="divider"></var>
                    <button id="form_button_edit" onClick={(e) => this.onSubmit(e,"edit")}>Eintrag bearbeiten</button>
                    <var className="divider"></var>
                    <button id="form_button_delete" onClick={(e) => this.onSubmit(e,"delete")}>Eintrag löschen</button>
                </div>
            </form>
        )
    }
}
{/*
aktuell wird noch der letzte punkt aus dem localStorage nicht abgespeichert, evtl auf nen andren OnClick oder ähnliches
*/}