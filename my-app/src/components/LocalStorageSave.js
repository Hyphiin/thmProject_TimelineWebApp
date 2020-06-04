import entry from "./entries";

const LocalStorageSave = () => {
    localStorage.setItem("allEntries"+localStorage.getItem("position"), JSON.stringify(entry));
    console.log(localStorage.getItem("allEntries"+localStorage.getItem("position")));
};
export default LocalStorageSave;

{/*
in dieser Datei ist die Funktion alle vorhandenen Einträge in einen String zu packen und in Local Storage
wird aufgerufen in timeLineItem <span> onClick
*/}