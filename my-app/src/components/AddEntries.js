import entry from "./entries";
import React, {Component} from "react";
import IconInsert from "./IconInsert";

function addContent (text, date, tag, icon, position, mode){

    if (text==null) {
        return entry;
    }
    if (text==="get"){
        console.log(entry);
        let newEntry=[];
        newEntry=entry.concat(newEntry);
        console.log(newEntry);
        return newEntry;
    }
    if(mode==="add") {
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            },
            icon: icon,
        };
        entry.splice(position,0,newObject);
        console.log(entry);
    }
    if (mode==="edit"){
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            },
            icon: icon,
        };
        entry.splice(position,1,newObject);
    }
    if (mode==="delete"){
        entry.splice(position,1);
    }
}
export default addContent;
