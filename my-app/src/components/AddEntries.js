import entry from "./Entries";
import React from "react";
import LocalStorageUsage from "./LocalStorageUsage";
import LocalStorageSave from "./LocalStorageSave";
import {timelinePrev} from "./Animation";


function editContent(text, date, tag, icon, file, position, mode, importInput) {
    if (mode === "get") {
        return entry;
    }
    if (mode === "add") {
        let newObject = {
            text: text,
            date: date,
            tag: tag,
            icon: icon,
            file: file,
        };
        entry.splice(position, 0, newObject);
        //console.log(entry);
    }

    if (mode === "nav") {
        while (entry.length > 0) {
            entry.pop();
        }
        if (LocalStorageUsage() != null) {
            for (let i = 0; i < LocalStorageUsage().length; i++) {
                entry.push(LocalStorageUsage()[i]);
            }
        }
        timelinePrev();
    }

    if (mode === "new") {

        while (entry.length > 0) {
            entry.pop();
        }
        LocalStorageSave()
    }
    if (mode === "import") {
        let input = JSON.parse(importInput);
        /*console.log(input);
        console.log(input.length);*/
        while (entry.length > 0) {
            entry.pop();
        }
        for (let i = 0; i < input.length; i++) {
            entry.push(input[i]);
        }
        LocalStorageSave();
        //console.log("Entry length: "+entry.length);
    }

    if (mode === "edit") {
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
