import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";
import gsap from "gsap";

class Export_Import extends React.Component {

    download(content) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = "JSON.txt";
        a.click();
    }

    componentDidMount() {
        console.clear();
        console.log( this.exportBtn);
        gsap.from(this.exportBtn, {duration: 1, delay: -0.9, opacity: 0.5, rotate: 360})
    }

    render() {
        return <div id="exportimportButtons">
            <button  onMouseEnter={e => hoverButton(e)}
                     onMouseOut={e => hoverExitButton(e)} ref={ e => this.exportBtn = e }
                     className="exportBtn" onClick={() =>this.download(localStorage.getItem("allEntries"+localStorage.getItem("position")))}>Export Timeline</button>
            {/*
<input id="insert" type="file" onChange={this.upload}/>
            <button className="exportBtn" onClick={() =>this.upload()}>Export Timeline</button>
*/}
        </div>
    }
}
export default Export_Import;