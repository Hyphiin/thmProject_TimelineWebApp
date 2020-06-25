import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";
import gsap from "gsap";
import editContent from "./AddEntries";

class Export_Import extends React.Component {

    download(content) {

        if (localStorage.getItem("xmlorjson") === "xml") {
            content = this.JSONtoXML(content)
        }
        let a = document.createElement("a");
        let file = new Blob([content], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        if (localStorage.getItem("xmlorjson") === "xml") {
            a.download = "Zeitstrahl.xml";
        } else {
            a.download = "Zeitstrahl.json";
        }
        a.click();
    }

    upload() {
        let file = document.getElementById("InputFile").files[0];
        if (file) {
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log(evt.target.result);
                let upload = evt.target.result.toString();


                if (editContent("", "", "", "", "", "", "get").length === 0) {

                } else {

                    let i = parseInt(localStorage.getItem("nuOfTimelines"));
                    console.log(i);
                    localStorage.setItem("position", (i + 1).toString());
                    localStorage.setItem("nuOfTimelines", (i + 1).toString());
                }

                if (evt.target.result.substr(0, 1) === "<") {
                } else {
                    editContent("", "", "", "", "", "", "import", upload);
                }


            };
            reader.onerror = function (evt) {
                console.log("error reading file")
            };

        }
    }

    JSONtoXML(json) {
        let convert = require('xml-js');
        return convert.json2xml(json, {compact: true, ignoreComment: true, spaces: 4});
    }

    XMLtoJSON(xml) {
        let convert = require('xml-js');
        return convert.xml2json(xml, {ignoreComment: true, alwaysChildren: true});
    }

    onSubmit = (e, xmlOrJson) => {
        e.preventDefault();
        if (xmlOrJson === "xml") {
            localStorage.setItem("xmlOrJson", "xml");
        }
        if (xmlOrJson === "json") {
            localStorage.setItem("xmlOrJson", "json");
        }
    };

    componentDidMount() {
        let tl = gsap.timeline();
        /*console.clear();
        console.log( this.jsonBtn);
        console.log( this.xmlBtn);
        console.log( this.exportBtn);
        console.log( this.file);
        console.log( this.importBtn);*/
        tl.from(this.jsonBtn, {duration: 1.5, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.xmlBtn, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.exportBtn, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.file, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.importBtn, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
    }

    render() {
        return <div id="exportimportButtons">
            <button onMouseEnter={e => hoverButton(e)}
                    onMouseOut={e => hoverExitButton(e)} ref={e => this.jsonBtn = e}
                    className="button" onClick={(e) => this.onSubmit(e, "json")}>JSON
            </button>
            <button onMouseEnter={e => hoverButton(e)}
                    onMouseOut={e => hoverExitButton(e)} ref={e => this.xmlBtn = e}
                    className="button" onClick={(e) => this.onSubmit(e, "xml")}>XML
            </button>
            <a href="#" className="cta"
               onClick={() => this.download(localStorage.getItem("allEntries" + localStorage.getItem("position")))}>
                <span className="span">Export Timeline</span>
                <svg className="svg" width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"/>
                    <polyline points="8 1 12 5 8 9"/>
                </svg>
            </a>
            <input ref={e => this.file = e} id="InputFile" type="file"/>
            <a href="#" className="cta" onClick={() => this.upload()}>
                <span className="span">Import Timeline</span>
                <svg className="svg" width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"/>
                    <polyline points="8 1 12 5 8 9"/>
                </svg>
            </a>
        </div>

    }
}

export default Export_Import;