import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";
import gsap from "gsap";
import LocalStorageUsage from "./localStorageUsage";
import editContent from "./AddEntries";

class Export_Import extends React.Component {

    download(content) {
        if (localStorage.getItem("xmlorjson")==="xml"){
            content = this.JSONtoXML(content)
        }
        var a = document.createElement("a");
        var file = new Blob([content], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = "JSON.txt";
        a.click();
    }

    upload(){
        var file = document.getElementById("InputFile").files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log(evt.target.result)
                //ToDo XML or JSON?
            }
            reader.onerror = function (evt) {
                console.log("error reading file")
            }
        }
    }

    JSONtoXML(json){
        var convert = require('xml-js');
        return convert.json2xml(json, {compact: true, ignoreComment: true, spaces: 4});
    }

    XMLtoJSON(xml){
        var convert = require('xml-js');
        return convert.xml2json(xml, {ignoreComment: true, alwaysChildren: true});
    }
    /*https://www.npmjs.com/package/xml-js#command-line*/

    onSubmit = (e, xmlorjson) => {
        e.preventDefault();
        if (xmlorjson==="xml"){
            localStorage.setItem("xmlorjson","xml");
        }
        if (xmlorjson==="json"){
            localStorage.setItem("xmlorjson","json");
        }
    };

    componentDidMount() {
        console.clear();
        console.log( this.exportBtn);
        gsap.from(this.exportBtn, {duration: 1, delay: -0.9, opacity: 0.5, rotate: 360})
    }

    render() {
        return <div id="exportimportButtons">
            <button className="" onClick={(e) => this.onSubmit(e, "json")}>JSON</button>
            <button className="" onClick={(e) => this.onSubmit(e, "xml")}>XML</button>
            <button  onMouseEnter={e => hoverButton(e)}
                     onMouseOut={e => hoverExitButton(e)} ref={ e => this.exportBtn = e }
                     className="exportBtn" onClick={() =>this.download(localStorage.getItem("allEntries"+localStorage.getItem("position")))}>Export Timeline</button>
                <input id="InputFile" type="file"/>
            <button className="importBtn" onClick={() =>this.upload()}>Import Timeline</button>
        </div>
    }
}
export default Export_Import;