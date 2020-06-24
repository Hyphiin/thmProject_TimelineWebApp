import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {itemStagger} from "./Animation";
import entry from "./entries";

export default class Edit extends React.Component{
    state = {
        date: "",
        description: "",
        tag: "",
        icon:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({date: "",
            description: "",
            tag: "", icon: ""})
    };

    render(){
        return (
            <form>
                <input placeholder='Beschreibung' value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                <input placeholder='Tag' value={this.state.tag} onChange={e => this.setState({tag: e.target.value})}/>
                <input type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                { localStorage.getItem('icon') ? <FontAwesomeIcon icon={['fas', localStorage.getItem('icon')]} /> : '' }
                <button onClick={(e) => this.onSubmit(e)}>Eintrag bearbeiten</button>
            </form>
        )
    }
}