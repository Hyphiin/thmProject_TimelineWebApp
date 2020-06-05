import editContent from "./AddEntries"
import React, {useState, useEffect, useRef} from "react";
import FileInput from "./FileInput";
import LocalStorageSave from "./LocalStorageSave";

import {
    circlesStagger, hoverCircle, hoverExitCircle
} from "./Animation";


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
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), editContent("","","","","","get").indexOf(entries),"add");

        }
        if (mode==="delete"){
            editContent("","","","",editContent("","","","", "","get").indexOf(entries),"delete");
        }
        if (mode==="edit"){
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"),editContent("","","","", "","get").indexOf(entries),"edit");
        }
    }

    /*Animation*/
    let circle1A = useRef(null);
    let circle2A = useRef(null);
    let fileA = useRef(null);
    useEffect(() => {

    })

    return (
        <div className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box">
            <span className="tag" >
                {entries.tag}
            </span>
                <time>{entries.date}</time>
                <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                <FontAwesomeIcon className="icon" icon={entries.icon} />
                </div>
                <div ref={el => (fileA = el)} className="file-input-content">
                <FileInput/>
                <span onMouseEnter={e => hoverCircle(e)}
                      onMouseOut={e => hoverExitCircle(e)} ref={el => (circle1A = el)}
                      className="circle1" onClick={() => {clickHandler(localStorage.getItem("mode")); LocalStorageSave()}}/>
                <span onMouseEnter={e => hoverCircle(e)}
                      onMouseOut={e => hoverExitCircle(e)} ref={el => (circle1A = el)}
                      ref={el => (circle2A = el)} className="circle2" onClick={() => {clickHandler(localStorage.getItem("mode")); LocalStorageSave()}}/>
            </div>
        </div>
        </div>
    )
}


export default TimeLineItem;