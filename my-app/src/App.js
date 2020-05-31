import React from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";
import LocalStorageCall from "./components/localStorageCall";
import LocalStUsedButton from "./components/localStUsedButton";


const App = () => {


    return (
        <div className="container">
            <h1>Max Mustermann</h1>
            <Timeline/>
            <Toolbox/>
            <Screenshot/>
            <LocalStorageCall/>
            <LocalStUsedButton/>
        </div>

    );

}


export default App;