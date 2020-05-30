import entry from "./entries";
import entry2 from "./entries2";
import React, {Component} from "react";

function editContent (text, date, tag, position, mode){

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
    if (mode==="new"){
        console.log(entry.length);
        while (entry.length>0) {
            entry.pop();
        }
        for(let i=0; i<entry2.length;i++){
            entry.push(entry2[i]);
        }
        console.log(entry);
    }

    if(mode==="add") {
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            }
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
            }
        };
        entry.splice(position,1,newObject);
    }


    if (mode==="delete"){
        entry.splice(position,1);
    }
}


export default editContent;
