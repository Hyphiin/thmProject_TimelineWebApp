import React from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";
import LocalStorageCall from "./components/localStorageCall";
import UseStateWithLocalStorage from "./components/useStateWithLocalStorage";

const App = () => {
    const [value, setValue] = UseStateWithLocalStorage("myValueLocal");
    const onChange = event => setValue(event.target.value);

    return (
        <div className="container" onChange={UseStateWithLocalStorage}>
            <h1>Max Mustermann</h1>

            <Timeline/>
            <Toolbox/>
            <Screenshot/>
            <LocalStorageCall/>
        </div>

    );

}


export default App;