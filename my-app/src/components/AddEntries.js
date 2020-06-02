import entry from "./entries";
import React, {Component} from "react";

function addContent(text, date, tag, position, mode) {

    if (text == null) {
        return entry;
    }
    if (text === "get") {
        console.log(entry);
        let newEntry = [];
        newEntry = entry.concat(newEntry);
        console.log(newEntry);
        return newEntry;
    }
    if (mode === "add") {
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            }
        };
        entry.splice(position, 0, newObject);
        console.log(entry);
    }
    if (mode === "edit") {
        let newObject = {
            text: text,
            date: date,
            category: {
                tag: tag
            }
        };
        entry.splice(position, 1, newObject);
    }
    if (mode === "delete") {
        entry.splice(position, 1);
    }
}

export default addContent;
