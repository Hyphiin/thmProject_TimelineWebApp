import entry from "./entries";
import entry2 from "./entries2";
import entry3 from "./entries3";
import React, {Component} from "react";

function editContent (text, date, tag, position, mode){

    if (mode==="get") {
        return entry;
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
    if(mode==="next"){
        while(entry.length>0){
            entry.pop();
        }
        for (let i=0; i<entry2.length;i++){
            entry.push(entry2[i]);
        }
    }
    if(mode==="prev"){
        while(entry.length>0){
            entry.pop();
        }
        for (let i=0; i<entry3.length;i++){
            entry.push(entry3[i]);
        }
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
