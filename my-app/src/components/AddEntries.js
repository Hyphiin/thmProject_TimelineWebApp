import entry from "./entries";
import React, {useState} from "react";

function addContent (props){
    if (props.text==null) {
        return entry
    }
    else {
        let newObject = {
            text: props.text,
            date: props.date,
            category: {
                tag: props.tag,
                color: props.color
            }
        };
        entry.push(newObject);
        console.log(entry);
    }
}
export default addContent;