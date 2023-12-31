import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";

class OptionsCSS extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        let x = document.getElementsByClassName("timeline-item-content");
        for (let i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = this.hintergrundfarbeInput.value;
        }
        let a = document.getElementById("timeline-export");
        let y = a.getElementsByTagName("p");
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = this.textfarbeInput.value;
            y[i].style.fontSize = this.fontsizeInput.value;
        }
        event.preventDefault();
    }


    render() {
        return (
            <div id="format_form">
                <form id="formatform" onSubmit={this.handleSubmit}>
                    <p id="formatbox_header">Formatierung</p>
                    <label htmlFor="textfarbe">Textfarbe: </label>
                    <input type="text" name="textfarbe" placeholder="Default: #000000"
                           ref={(input) => this.textfarbeInput = input}/>
                    <br/>
                    <label htmlFor="hintergrundfarbe">Hintergrundfarbe: </label>
                    <input type="text" name="hintergrundfarbe" placeholder="Default: #42A6C6"
                           ref={(input) => this.hintergrundfarbeInput = input}/>
                    <br/>
                    <label htmlFor="schriftgroesse">Schriftgröße: </label>
                    <input type="text" placeholder="Default: 16px" name="schriftgroesse"
                           ref={(input) => this.fontsizeInput = input}/>
                    <br/>
                    <input onMouseEnter={e => hoverButton(e)}
                           onMouseOut={e => hoverExitButton(e)}
                           className="button" type="submit" value="Bestätigen"/>
                </form>
            </div>
        );
    }
}

export default OptionsCSS;