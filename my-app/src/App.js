import React, {useEffect, useRef} from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";

import {
    ersteAnimation, h1Animation, handleHover, handleHoverExit
} from "./components/Animation";

function App () {
        let userName = useRef(null);

        useEffect(() => {
                h1Animation(userName);
        })


        return(
        <>
             <h1 ref={el => (userName = el)} >Max Mustermann</h1>
             <div className="container">
                <Timeline/>
                <Toolbox/>
             </div>
                <Screenshot/>
        </>
        )
};

export default App;