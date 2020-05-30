import React from "react";
import useStateWithLocalStorage from "./useStateWithLocalStorage";


 const LocalStorageCall = () => (

    <button id="localStorage-Button" onClick={useStateWithLocalStorage}>
        Speichern
    </button>

);

{/*
const [value, setValue] = useStateWithLocalStorage("myValueLocal"); //value has to be the whole Site somehow
const onClick = event => setValue(event.target.value);
*/}

{/*} const useStateWithLocalStorage = localStorageKey => {
        const [value, setValue] = React.useState(localStorage.getItem(localStorageKey) || "");

        React.useEffect(() => {
            localStorage.setItem(localStorageKey, value);
        }, [value]);

        return [value,setValue];
    };

        const [value, setValue] = useStateWithLocalStorage("myValueLocal");
        const onClick = event => setValue(event.target.value);


*/}
export default LocalStorageCall;