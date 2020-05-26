import React from 'react';
import '../App.css';
import {render} from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconInsert from "./IconInsert";
import {faAnchor} from "@fortawesome/free-solid-svg-icons";


class IconResult extends React.Component {
    render() {
        return "" + IconInsert.result;
    }
}

export default IconResult;