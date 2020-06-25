import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";
import gsap from "gsap";
import LocalStorageUsage from "./localStorageUsage";
import editContent from "./AddEntries";
import Screenshot from "./screenCapture";

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
                console.log(evt.target.result);
                let upload=evt.target.result.toString();

                //ToDo XML or JSON?
                if(editContent("","","","","","","get").length===0){

                }
                else{

                    let i=parseInt(localStorage.getItem("nuOfTimelines"));
                    console.log(i);
                    localStorage.setItem("position",(i+1).toString());
                    localStorage.setItem("nuOfTimelines", (i+1).toString());
                }
                editContent("","","","","","","import",upload);

            };
            reader.onerror = function (evt) {
                console.log("error reading file")
            };

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
        let tl = gsap.timeline();
        console.clear();
        console.log( this.jsonBtn);
        console.log( this.xmlBtn);
        console.log( this.exportBtn);
        console.log( this.file);
        console.log( this.importBtn);
        tl.from(this.jsonBtn, {duration: 1.5, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.xmlBtn, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.exportBtn, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.file, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
        tl.from(this.importBtn, {duration: 1, delay: -0.7, opacity: 0.5, scale: 0.9})
    }

    render() {
        return<div id="exportimportButtons">
            <button onMouseEnter={e => hoverButton(e)}
                    onMouseOut={e => hoverExitButton(e)} ref={ e => this.jsonBtn = e }
                    className="" class="button" onClick={(e) => this.onSubmit(e, "json")}>JSON</button>
            <button onMouseEnter={e => hoverButton(e)}
                    onMouseOut={e => hoverExitButton(e)} ref={ e => this.xmlBtn = e }
                    className="" class="button" onClick={(e) => this.onSubmit(e, "xml")}>XML</button>
            <a href="#" className="cta" onClick={() =>this.download(localStorage.getItem("allEntries"+localStorage.getItem("position")))}>
                <span className="span">Export Timeline</span>
                <svg className="svg" width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
            <input ref={ e => this.file = e } id="InputFile" type="file"/>
            <a href="#" className="cta" onClick={() =>this.upload()}>
                <span className="span">Import Timeline</span>
                <svg className="svg" width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
        </div>

    }
}
export default Export_Import;