import React from "react";

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
        this.setState({date: "",
            description: "",
            tag: "",})
    };

    render(){
        return (
            <form>
                <input placeholder='Beschreibung' value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                <br/>
                <input placeholder='Tag' value={this.state.tag} onChange={e => this.setState({tag: e.target.value})}/>
                <br/>
                <input type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                <br/>
                <button onClick={(e) => this.onSubmit(e,"edit")}>Eintrag bearbeiten</button>
                <br/>
                <button type="button" id="eintragerstellenbutton" onClick={(e) => this.onSubmit(e,"add")}>Eintrag erstellen</button>
            </form>
        )
    }
}