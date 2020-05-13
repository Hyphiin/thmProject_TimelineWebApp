import React from "react";

console.log("toolbox");
const Toolbox = () => (
    <div className="toolbox-container">
        <p>Toolbox</p>

        <div id="eintragerstellen">
            <button type="button" id="eintragerstellenbutton" onClick="eintragErstellenAusklappen()">Eintrag erstellen</button>
        </div>
        <div id="eintragbearbeiten">
            <button type="button" id="eintragbearbeitenbutton">Eintrag bearbeiten</button>
        </div>
        <div id="eintraglöschen">
            <button type="button" id="eintragloeschenbutton">Eintrag löschen</button>
        </div>

    </div>

);
export default Toolbox;