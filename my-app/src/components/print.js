import React, {useRef} from "react";
import ReactToPrint from "react-to-print";
import Timeline from "./timeLine.js";

        const Print = () => {
            const componentRef = useRef();

            return (
                <div>
                    <ReactToPrint
                        trigger={() => <button>Print this out!</button>}
                        content={() => componentRef.current}
                    />
                    <div style={{display: "none"}}>
                    <Timeline ref={componentRef}/>
                    </div>
                </div>
            );
        };
export default Print;