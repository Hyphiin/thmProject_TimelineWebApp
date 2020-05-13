import entry from "./entries";
import React from "react";

function addContent (text, date, tag){
    if (text==null) {
        return entry
    }
    else {
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            }
        };
        entry.push(newObject);
        console.log(entry);
    }
}
export default addContent;