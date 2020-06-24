import React from "react";
import ReactToPrint from "react-to-print";
import Timeline from "./timeLine.js";

class Print extends React.Component{

    render(){
        return(
            <div>
                <ReactToPrint
                    trigger={()=> <button>Drucken</button>}
                    documentTitle={()=> "Mein Lebenslauf"}
                    copyStyles={()=> true}
                    content={()=> this.componentRef}
                />
                <div style={{display: "none"}}>
                    <Timeline ref={el => (this.componentRef = el)}/>
                </div>
            </div>
        )
    }
}

export default Print;