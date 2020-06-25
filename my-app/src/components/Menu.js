import React, {Component} from "react";
import "./OffCanvas.css";
import ToolBox from "./ToolBox";

class Menu extends Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                 className={visibility}>
                <ToolBox/>
                <button className="toggle-button" onMouseDown={this.props.handleMouseDown}>
                    <div className="toggle-button__line"/>
                    <div className="toggle-button__line"/>
                    <div className="toggle-button__line"/>
                </button>
            </div>
        );
    }
}

export default Menu;