import React, {useEffect, useRef, Component} from 'react';
import './App.css';
import Timeline from "./components/timeLine";
import Toolbox from "./components/toolBox";
import Screenshot from "./components/screenCapture";
import LocalStorageSave from "./components/LocalStorageSave";

import {
    h1Animation,
    hoverExitItem,
    hoverItem, timelineLine, timelineStagger,
} from "./components/Animation";


class App extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        entries: this.props.entries
                }
        }

            
        clickHandler(nu){
                LocalStorageSave();
                this.setState({
                        entries: nu
                });
        }

        componentDidMount() {
                console.clear();
                timelineStagger();
                timelineLine();
        }

        render() {
                return <>
                        <h1>React Lebenslauf</h1>
                        <div className="container" onClick={()=>this.clickHandler("jo")}>
                                <Timeline/>
                                <Toolbox/>
                        </div>


                </>
        }
}
export default App;