import editContent from "./AddEntries"
import React, {useState, useEffect, useRef} from "react";
import FileInput from "./FileInput";
import LocalStorageSave from "./LocalStorageSave";

import {
    circlesStagger,
    clickButtonEdit,
    clickCircle,
    clickCircleMid, clickPlus,
    hoverCircle,
    hoverCircleMid,
    hoverExitCircle,
    hoverExitCircleMid,
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
    faBook, faPlus
} from "@fortawesome/free-solid-svg-icons";
import LocalStorageUsage from "./localStorageUsage";

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
        localStorage.setItem("test",(3).toString());
        let i = parseInt(localStorage.getItem("test"),10);
        console.log(i);
        localStorage.setItem("mode", "neutral");
        console.log(mode + "," + pos);
        if (mode === "add" && pos === "before") {
            console.log("add before");
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), localStorage.getItem("file"), editContent("", "", "", "", "", "", "get").indexOf(entries), "add");
        }
        if (mode === "add" && pos === "after") {
            console.log("add after");
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), localStorage.getItem("file"), editContent("", "", "", "", "", "", "get").indexOf(entries) + 1, "add");
        }
        if (mode === "delete" && pos==="middle") {
            editContent("", "", "", "", "", editContent("", "", "", "", "", "", "get").indexOf(entries), "delete");
        }
        if (mode === "edit" && pos==="middle") {
            console.log(editContent("", "", "", "", "", "", "get").indexOf(entries));
            editContent(localStorage.getItem("text"), localStorage.getItem("date"), localStorage.getItem("tag"), localStorage.getItem("icon"), localStorage.getItem("file"), editContent("", "", "", "", "", "", "get").indexOf(entries), "edit");

        }
    }

    /*Animation*/
    let circle1A = useRef(null);
    let circle2A = useRef(null);
    let fileA = useRef(null);
    useEffect(() => {

    })

    let arrayOfItems = document.getElementsByClassName("timeline-item");
    for (let i = 0; i < arrayOfItems.length; i++) {
        arrayOfItems[i].id = "entry " + i.toString();
    }

    const entriesArray = LocalStorageUsage();
    const dragItem = useRef();

    const handleDragStart = (e, id) => {
        console.log("Drag start", id.entriesArray);
    }

    return (
        <div className="timeline-item" draggable={true} onDragStart={(e) => handleDragStart(e, {entriesArray})}>
            <div id="1" className="timeline-item-content">
                <div className="box">
            <span className="tag">
                {entries.tag}
            </span>
                    <time>{entries.date}</time>
                    <p className="timeline-item-text" onClick={() => clickHandler("remove")}> {entries.text} </p>
                    <FontAwesomeIcon className="test" icon={entries.icon}/>
                    <div>
                        <input type="image" className="image" src={entries.file}/>
                    </div>
                    <div ref={el => (fileA = el)} className="file-input-content">
                    <span //onMouseEnter={e => hoverCircle(e)} //erster dot
                        //onMouseOut={e => hoverExitCircle(e)}
                        ref={el => (circle1A = el)} className="circle1" onClick={() => {
                        clickHandler(localStorage.getItem("mode"), "before");
                        LocalStorageSave()
                        clickCircle()
                    }}/>
                        <span //onMouseEnter={e => hoverCircle(e)} //letzer dot
                            //onMouseOut={e => hoverExitCircle(e)}
                            ref={el => (circle2A = el)} className="circle2" onClick={() => {
                            clickHandler(localStorage.getItem("mode"), "after");
                            LocalStorageSave()
                            clickCircle()
                        }}/>
                        <span onMouseEnter={e => hoverCircleMid(e)} //mittlerer dot
                              onMouseOut={e => hoverExitCircleMid(e)}
                              ref={el => (circle2A = el)} className="circle3" onClick={() => {
                            clickHandler(localStorage.getItem("mode"), "middle");
                            LocalStorageSave()
                            clickCircleMid()
                        }}/>
                        <span //onMouseEnter={e => hoverPlus(e)}
                            //onMouseOut={e => hoverExitPlus(e)}
                            className="plus1"
                            onClick={() => {
                                clickHandler(localStorage.getItem("mode"), "before");
                                LocalStorageSave()
                                clickPlus()
                            }}><FontAwesomeIcon style={{margin: '5px'}} icon={faPlus}/></span>
                        <span //onMouseEnter={e => hoverPlus(e)}
                            //onMouseOut={e => hoverExitPlus(e)}
                            className="plus2"
                            onClick={() => {
                                clickHandler(localStorage.getItem("mode"), "after");
                                LocalStorageSave()
                                clickPlus()
                            }}><FontAwesomeIcon style={{margin: '5px'}} icon={faPlus}/></span>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default TimeLineItem;