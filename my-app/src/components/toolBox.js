import React from "react";
import Add from "./Add";
import Edit from "./Edit";

const Toolbox = () => (
    <div className="toolBox-container">
        <p>Toolbox</p>
        <div id="eintragerstellen">
            <Add/>
        </div>
        <div id="eintragbearbeiten">
            <Edit/>
        </div>
        <div id="eintraglöschen">
            <button type="button" id="eintragloeschenbutton">Eintrag löschen</button>
        </div>
    </div>
);

export default Toolbox;