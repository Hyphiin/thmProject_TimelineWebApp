import React, {useState} from "react";
import entry2 from "./entries2";
import timeLine from "./timeLine";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: this.props.entries
        }
    }

    setTimeline(entries) {
        this.setState({
            entries: entries
        });
        localStorage.setItem('Timeline', entries);
        console.log(entries);
    }



    render() {
        return <div id="navButtons">
                    <a className="prev" href="#" onClick={() =>this.setTimeline(2)} >&#8249;</a>
                    <a className="next" href="#" onClick={() =>this.setTimeline(1)}>&#8250;</a>
                </div>
    }
}
export default Navigation;