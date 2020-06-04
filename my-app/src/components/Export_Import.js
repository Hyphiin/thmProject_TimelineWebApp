import React from "react";

class Export_Import extends React.Component {

    download(content) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = "JSON.txt";
        a.click();
    }

    render() {
        return <div id="exportimportButtons">
            <button className="exportBtn" onClick={() =>this.download(localStorage.getItem("allEntries"+localStorage.getItem("position")))}>Export Timeline</button>
            {/*
<input id="insert" type="file" onChange={this.upload}/>
            <button className="exportBtn" onClick={() =>this.upload()}>Export Timeline</button>
*/}
        </div>
    }
}
export default Export_Import;