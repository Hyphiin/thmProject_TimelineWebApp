import React, {useState, useEffect, useRef} from "react";
import addContent from "./AddEntries"
import FileInput from "./FileInput";

import {
    circlesStagger,
    hoverCircle,
    hoverExitCircle, hoverExitTimeline, hoverTimelineItem, timelineContentAOFF, timelineContentAON,
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
                addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), addContent().indexOf(entries),"add");
                addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),localStorage.getItem("icon"), addContent().indexOf(entries),"add");

        }
        if (mode==="delete"){
            addContent("","","", "",addContent().indexOf(entries),"delete");
        }
        if (mode==="edit"){
            addContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"),localStorage.getItem("icon"), addContent().indexOf(entries),"edit");
        }
    }

    /*Animation*/
    let tagA = useRef(null);
    let circle1A = useRef(null);
    let circle2A = useRef(null);
    let fileA = useRef(null);
    let timeA = useRef(null);
    useEffect(() => {
        circlesStagger(circle1A,circle2A);
    })

    return (
        <div className="timeline-item">
            <div className="timeline-item-content" >
                <div className="box">
                    <span ref={el => (tagA = el)} className="tag" >
                        {entries.category.tag}
                     </span>
                     <time ref={el => (timeA = el)} >{entries.date}</time>
                    <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                <FontAwesomeIcon className="test" icon={entries.icon}/>
                </div>
                <div ref={el => (fileA = el)} className="file-input-content">
                <FileInput/>
                </div>
                <span onMouseEnter={e => hoverCircle(e)}
                      onMouseOut={e => hoverExitCircle(e)}
                      ref={el => (circle1A = el)} className="circle1" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
                <span onMouseEnter={e => hoverCircle(e)}
                      onMouseOut={e => hoverExitCircle(e)}
                      ref={el => (circle2A = el)} className="circle2" onClick={() => clickHandler(localStorage.getItem("mode"))}/>
            </div>
        </div>
    )
}

export default TimeLineItem;