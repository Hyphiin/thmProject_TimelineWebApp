import React from "react";
import IconInsert from "./IconInsert";

export default class Edit extends React.Component{
    state = {
        date: "",
        description: "",
        tag: "",
        icon: "",
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({date: "",
            description: "",
            tag: "",
            icon:"",})
    };

    render(){
        return (
            <form>
                <input placeholder='Beschreibung' value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                <input placeholder='Tag' value={this.state.tag} onChange={e => this.setState({tag: e.target.value})}/>
                <input type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                <IconInsert value={this.state.icon} onChange={e => this.setState({icon: e.target.onReturn})}/>
                <button onClick={(e) => this.onSubmit(e)}>Eintrag bearbeiten</button>
            </form>
        )
    }
}