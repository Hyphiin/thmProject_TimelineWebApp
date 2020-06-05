import entry from "./entries";
import React, {Component} from "react";
import LocalStorageUsage from "./localStorageUsage";
import LocalStorageSave from "./LocalStorageSave";


function editContent (text, date, tag, icon, file, position, mode){
    if (mode==="get") {
            return entry;
    }
    if(mode==="add") {
        let newObject = {
            text: text,
            date: date,
            tag: tag,
            icon: icon,
            file: file,

        };
        entry.splice(position, 0, newObject);
        console.log(entry);
    }

    if(mode==="nav"){
        while(entry.length>0){
            entry.pop();
        }
        if(LocalStorageUsage()!=null) {
            for (let i = 0; i < LocalStorageUsage().length; i++) {
                entry.push(LocalStorageUsage()[i]);
            }
        }
    }

    if (mode==="new"){

        while(entry.length>0){
            entry.pop();
        }
        LocalStorageSave()
    }

    if (mode==="edit"){
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            },
            icon: icon,
            file: file,
        };
        entry.splice(position, 1, newObject);
    }
    if (mode === "delete") {
        entry.splice(position, 1);
    }
}


export default editContent;
