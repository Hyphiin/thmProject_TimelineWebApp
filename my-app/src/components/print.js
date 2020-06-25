import React, {useRef} from "react";
import ReactToPrint from "react-to-print";
import TimeLine from "./TimeLine.js";
import {hoverButton, hoverExitButton} from "./Animation";

const Print = () => {
    const componentRef = useRef();

    return (
        <div className="printButton">
            <ReactToPrint
                trigger={() => <button className="button"
                                       onMouseEnter={e => hoverButton(e)}
                                       onMouseOut={e => hoverExitButton(e)}>Print this out!</button>}
                content={() => componentRef.current}
            />
            <div style={{display: "none"}}>
                <TimeLine ref={componentRef}/>
            </div>
        </div>
    );
};
export default Print;