const LocalStorageUsage = () => {
    let intermediate = localStorage.getItem("allEntries" + localStorage.getItem("position"));
    let allEntriesBackToObj = JSON.parse(intermediate);
    //console.log(allEntriesBackToObj[0].text + allEntriesBackToObj[0].date);
    return allEntriesBackToObj;
};
export default LocalStorageUsage;

{/*
In dieser Datei wird der lokale Speicher aller Einträge auf intermediate gesetzt, um ihn anschließend wieder mit
parse als ein Objekt/Array zu speichern
das Wieder-hinzufügen klappt noch nicht, Abruf der einzelnen Werte der Einträge schon (siehe console.log)
aktuell Abruf über localStUsedButton
*/
}