import entry from "./Entries";

const LocalStorageSave = () => {
    localStorage.setItem("allEntries" + localStorage.getItem("position"), JSON.stringify(entry));
};
export default LocalStorageSave;

{/*
in dieser Datei ist die Funktion alle vorhandenen Einträge in einen String zu packen und in Local Storage
wird aufgerufen in timeLineItem <span> onClick
*/
}