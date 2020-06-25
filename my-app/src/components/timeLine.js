import React from "react";
import MapEntries from "./MapEntries";


console.log("timeline");

class TimeLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: this.props.entries
        }
    }

    render() {
        return <div id="timeline-export" className="timeline-container">
            <MapEntries/>
        </div>
    }
}

export default TimeLine;