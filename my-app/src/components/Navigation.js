import React, {useState} from "react";
import editContent from "./AddEntries";


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: this.props.entries
        }
    }

    setTimeline(direction) {
        if (direction==="next") {
            let i=2;
            localStorage.setItem("position",i.toString());
            console.log(localStorage.getItem("position"));
            editContent("", "", "", "", "next")
        }
        if (direction==="prev"){
            let i=1;
            editContent("", "", "", "", "prev");
            localStorage.setItem("position",i.toString());
        }
    }



    render() {
        return <div id="navButtons">
                    <a className="prev" href="#" onClick={() =>this.setTimeline("prev")} >&#8249;</a>
                    <a className="next" href="#" onClick={() =>this.setTimeline("next")}>&#8250;</a>
                    <p>Seite {localStorage.getItem("position")} von 2</p>
                </div>
    }
}
export default Navigation;