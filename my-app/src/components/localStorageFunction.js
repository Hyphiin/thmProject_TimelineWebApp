import entry from "./entries";



const LocalStorageSaved = () => {
    localStorage.setItem("allEntries", JSON.stringify(entry));
}

export default LocalStorageSaved;