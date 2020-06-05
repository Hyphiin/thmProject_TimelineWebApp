import React from "react";
import editContent from "./AddEntries";
import TimeLineItem from "./timeLineItem";
import LocalStorageSave from "./LocalStorageSave";
import LocalStorageUsage from "./localStorageUsage";

class MapEntries extends React.Component{

    render()
    {
        let i=parseInt(localStorage.getItem("nuOfTimelines"));
        if(isNaN(i)===true){
            console.log("drinne");
            i=1;
            localStorage.setItem("nuOfTimelines",i.toString());
            localStorage.setItem("position",i.toString());
            editContent("","","","", "","","new");
        }


            return editContent("", "", "", "", "","","get").map((entries, idx) => (
                <TimeLineItem entries={entries} key={idx}/>
            ))
        }

}
export default MapEntries;



