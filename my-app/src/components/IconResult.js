import React from 'react';
import '../App.css';
import {render} from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconInsert from "./IconInsert";
import {
    faAddressBook,
    faAmbulance,
    faAnchor, faAtom, faBaby, faBaseballBall, faBasketballBall, faBatteryEmpty, faBatteryFull,
    faBirthdayCake,
    faBook,
    faCoffee, faFootballBall, faShoppingBag, faWineBottle
} from "@fortawesome/free-solid-svg-icons";




function IconResult(icon){

    switch (icon) {
        case 'coffee':
            return faCoffee;
        case 'cake':
            return faBirthdayCake;
        default:
            return null;
    }
}

export default IconResult;