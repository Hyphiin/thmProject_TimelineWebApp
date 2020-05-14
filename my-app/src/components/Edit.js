import React from "react";

export default class Edit extends React.Component{
    state = {
        date: "",
        description: "",
        tag: "",
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                <button onClick={(e) => this.onSubmit(e)}>Eintrag bearbeiten</button>
            </form>
        )
    }
}