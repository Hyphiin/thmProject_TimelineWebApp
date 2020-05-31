import React from "react";
import LocalStorageUsage from "./localStorageUsage";

const LocalStUsedButton = () => (
    <button id="localStUsed-Button" onClick={LocalStorageUsage}>
        Abrufen
    </button>
)

export default LocalStUsedButton;

{/*
ruft das abgespeicherte Array auf, soll später ersetzt werden bzw. ohne button funktionieren
*/}