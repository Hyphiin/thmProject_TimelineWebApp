import React, {useState} from "react";
import editContent from "./AddEntries"
import FileInput from "./FileInput";
import LocalStorageSave from "./LocalStorageSave";


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
                editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), editContent("","","","","get").indexOf(entries),"add");

        }
        if (mode==="delete"){
            editContent("","","",editContent("","","","","get").indexOf(entries),"delete");
        }
        if (mode==="edit"){
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),editContent("","","","","get").indexOf(entries),"edit");
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
                    { localStorage.getItem('icon') ? <FontAwesomeIcon icon={['fas', localStorage.getItem('icon')]} /> : '' }
                </div>
                <FileInput/>
                <span className="circle" onClick={() => {clickHandler(localStorage.getItem("mode")); LocalStorageSave()}}/>
            </div>
        </div>
    )
}

export default TimeLineItem;