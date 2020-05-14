import React from "react";
import Add from "./Add";
import Edit from "./Edit";

function Toolbox () {
    function clickHandler () {
        localStorage.setItem("mode","delete");
    }
    return(
    <div className="toolBox-container">
        <p>Toolbox</p>

        <div id="eintragbearbeiten">
            <Edit/>
        </div>

        <div id="eintraglöschen">
            <button type="button" id="eintragloeschenbutton" onClick={() => clickHandler()}>Eintrag löschen</button>
        </div>
    </div>
    )
}

export default Toolbox;