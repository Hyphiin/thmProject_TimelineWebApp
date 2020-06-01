import React, {useState} from "react";
import addContent from "./AddEntries"
import FileInput from "./FileInput";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faBirthdayCake,
    faAddressBook,
    faAmbulance,
    faWineBottle,
    faAnchor,
    faAtom,
    faBaby,
    faBaseballBall,
    faBasketballBall,
    faFootballBall,
    faShoppingBag,
    faBatteryEmpty,
    faBatteryFull,
    faBook
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faCoffee,
    faBirthdayCake,
    faAddressBook,
    faAmbulance,
    faWineBottle,
    faAnchor,
    faAtom,
    faBaby,
    faBaseballBall,
    faBasketballBall,
    faFootballBall,
    faShoppingBag,
    faBatteryEmpty,
    faBatteryFull,
    faBook
);


function TimeLineItem ({entries}) {
    
    function clickHandler(mode) {
        localStorage.setItem("mode","neutral");
        if (mode==="add") {
                addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),localStorage.getItem("icon"), addContent().indexOf(entries),"add");

        }
        if (mode==="delete"){
            addContent("","","", "",addContent().indexOf(entries),"delete");
        }
        if (mode==="edit"){
            addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),localStorage.getItem("icon"), addContent().indexOf(entries),"edit");
        }
        

    }


    return (
        <div className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box">
            <span className="tag" >
                {entries.category.tag}
            </span>
                <time>{entries.date}</time>
                <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                <FontAwesomeIcon className="test" icon={entries.icon}/>
                </div>
                <FileInput/>
                <span className="circle" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
            </div>
        </div>
    )
}

export default TimeLineItem;