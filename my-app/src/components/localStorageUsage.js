const LocalStorageUsage = () => {
    var intermediate = localStorage.getItem("allEntries");
    var allEntriesBackToObj = JSON.parse(intermediate);
    console.log("hallo " + allEntriesBackToObj[0].text);
}
export default LocalStorageUsage;