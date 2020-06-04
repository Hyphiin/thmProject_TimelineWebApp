/*die einzelnen Einträge des Zeitstrahls werden hier als Array aufgelistet mit Datum etc.*/
import LocalStorageUsage from "./localStorageUsage";

let i=parseInt(localStorage.getItem("nuOfTimelines"));
let entry=LocalStorageUsage();
if(isNaN(i)===true) {
     entry = [LocalStorageUsage()];
}





export default entry;
