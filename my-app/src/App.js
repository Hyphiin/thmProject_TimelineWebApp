import React, {useEffect, useRef, Component} from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";

import {
    h1Animation,
    hoverExitItem,
    hoverItem, timelineLine, timelineStagger,
} from "./components/Animation";

function App () {

        /*Animation*/
        let userName = useRef(null);
        useEffect(() => {
                h1Animation(userName);
                timelineStagger();
                timelineLine();
        })

        return(
        <>
             <h1 onMouseEnter={e => hoverItem(e)}
                 onMouseOut={e => hoverExitItem(e)}
                 ref={el => (userName = el)} >Max Mustermann</h1>
             <div className="container">
                <Timeline/>
                <Toolbox/>
             </div>
                <Screenshot/>
        </>
        )
};

export default App;