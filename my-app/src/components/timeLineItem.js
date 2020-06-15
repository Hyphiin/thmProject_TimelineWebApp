import editContent from "./AddEntries"
import React, {useState, useEffect, useRef} from "react";
import FileInput from "./FileInput";
import LocalStorageSave from "./LocalStorageSave";

import {
    circlesStagger, hoverCircle, hoverExitCircle
} from "./Animation";


import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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


function TimeLineItem({entries}) {

    function clickHandler(mode, pos) {
        localStorage.setItem("mode", "neutral");
        console.log(mode+","+pos);
        if (mode === "add" && pos === "before") {
            console.log("add before");
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), localStorage.getItem("file"), editContent("", "", "", "", "", "", "get").indexOf(entries), "add");
        }
        if (mode === "add" && pos === "after") {
            console.log("add after");
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), localStorage.getItem("file"), editContent("", "", "", "", "", "", "get").indexOf(entries) + 1, "add");
        }
        if (mode === "delete") {
            editContent("", "", "", "", "", editContent("", "", "", "", "", "", "get").indexOf(entries), "delete");
        }
        if (mode === "edit" ) {
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), localStorage.getItem("file"), editContent("", "", "", "", "", "", "get").indexOf(entries), "edit");
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
            <div className="timeline-item-content">
                <div className="box">
            <span className="tag">
                {entries.tag}
            </span>
                    <time>{entries.date}</time>
                    <p onClick={() => clickHandler("remove")}> {entries.text} </p>
                    <FontAwesomeIcon className="test" icon={entries.icon}/>
                    <div>
                        <img className="image" src={entries.file}/>
                    </div>
                </div>
                <div ref={el => (fileA = el)} className="file-input-content">
                    <span onMouseEnter={e => hoverCircle(e)} //erster dot
                          onMouseOut={e => hoverExitCircle(e)} ref={el => (circle1A = el)}
                          className="circle1" onClick={() => {
                        clickHandler(localStorage.getItem("mode"), "before");
                        LocalStorageSave()
                    }}/>
                    <span onMouseEnter={e => hoverCircle(e)} //letzer dot
                          onMouseOut={e => hoverExitCircle(e)} ref={el => (circle1A = el)}
                          ref={el => (circle2A = el)} className="circle2" onClick={() => {
                        clickHandler(localStorage.getItem("mode"), "after");
                        LocalStorageSave()
                    }}/>
                    <span onMouseEnter={e => hoverCircle(e)} //mittlerer dot
                          onMouseOut={e => hoverExitCircle(e)} ref={el => (circle1A = el)}
                          ref={el => (circle2A = el)} className="circle3" onClick={() => {
                        clickHandler(localStorage.getItem("mode"), "middle");
                        LocalStorageSave()
                    }}/>
                    <span className="plus1" onClick={() => {clickHandler(localStorage.getItem("mode"), "before");
                        LocalStorageSave()}} />
                    <span className="plus2" onClick={() => {
                        clickHandler(localStorage.getItem("mode"), "after");
                        LocalStorageSave()
                    }}/>
                </div>
            </div>
        </div>
    )
}


export default TimeLineItem;