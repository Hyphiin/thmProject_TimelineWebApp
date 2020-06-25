import React from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./TimeLineItem";

class MapEntries extends React.Component {

    render() {
        let i = parseInt(localStorage.getItem("nuOfTimelines"));
        if (isNaN(i) === true) {
            i = 1;
            localStorage.setItem("nuOfTimelines", i.toString());
            localStorage.setItem("position", i.toString());
            editContent("", "", "", "", "", "", "new");
        }

        return editContent("", "", "", "", "", "", "get").map((entries, idx) => (
            <TimeLineItem entries={entries} key={idx}/>
        ))
    }

}

export default MapEntries;



