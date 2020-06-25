import React, {useRef} from "react";
import ReactToPrint from "react-to-print";
import Timeline from "./timeLine.js";
import {hoverButton, hoverErstellenButton, hoverExitButton, hoverExitErstellenButton} from "./Animation";

        const Print = () => {
            const componentRef = useRef();

            return (
                <div class="printButton">
                    <ReactToPrint
                        trigger={() => <button class="button"
                                               onMouseEnter={e => hoverButton(e)}
                                               onMouseOut={e => hoverExitButton(e)}>Print this out!</button>}
                        content={() => componentRef.current}
                    />
                    <div style={{display: "none"}}>
                    <Timeline ref={componentRef}/>
                    </div>
                </div>
            );
        };
export default Print;