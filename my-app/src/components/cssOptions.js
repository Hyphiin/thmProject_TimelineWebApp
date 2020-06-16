import React from "react";
import ReactDOM from "react-dom";

class CssOptions extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }


    handleSubmit(event){
        let x = document.getElementsByClassName("timeline-item-content");
        for(let i=0; i<x.length; i++)
        {
            x[i].style.backgroundColor = this.hintergrundfarbeInput.value;
        }
        let a = document.getElementById("1");
        let y = a.getElementsByTagName("p");
        for(let i=0; i<y.length; i++)
        {
            y[i].style.color = this.textfarbeInput.value;
            y[i].style.fontSize = this.fontsizeInput.value;
        }
        event.preventDefault();
    }


    render(){
        return(
            <div id="format_form">
                <form id="formatform" onSubmit={this.handleSubmit}>
                    <p id="formatbox_header">Formatierung</p>
                  <label htmlFor="textfarbe">Textfarbe: </label>
                       <select name="textfarbe" ref={(input) => this.textfarbeInput = input}>
                           <option value="default">Schwarz</option>
                           <option value="white">Weiß</option>
                           <option value="red">Rot</option>
                           <option value="green">Grün</option>
                        </select>
                    <br/>
                    <label htmlFor="hintergrundfarbe">Hintergrundfarbe: </label>
                        <select name="hintergrundfarbe" ref={(input) => this.hintergrundfarbeInput = input}>
                            <option value="default">Default</option>
                            <option value="white">Weiß</option>
                            <option value="red">Rot</option>
                            <option value="green">Grün</option>
                        </select>
                    <br/>
                    <label htmlFor="schriftgroesse">Schriftgröße: </label>
                    <select name="schriftgroesse" ref={(input) => this.fontsizeInput = input}>
                        <option value="default">Default</option>
                        <option value="14px">14</option>
                        <option value="18px">18</option>
                        <option value="20px">20</option>
                    </select>
                    <br/>
                  <input type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
}

export default CssOptions;