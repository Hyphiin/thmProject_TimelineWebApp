import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faBirthdayCake,
    faAddressBook,
    faAmbulance,
    faWineBottle,
    faAnchor,
    faAtom,
    faBaby,
    faBaseballBall,
    faBasketballBall,
    faFootballBall,
    faShoppingBag,
    faBatteryEmpty,
    faBatteryFull,
    faBook
} from "@fortawesome/free-solid-svg-icons";

class IconInsert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: this.props.icon
        }
    }

    setIcon(icon) {
        this.setState({
            icon: icon
        });
        localStorage.setItem('icon', icon.iconName);
        console.log(icon);
    }

    render() {
        return  <div className="icon">
            Icon:
            <div className="iconselect">
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faCoffee} onClick={() => this.setIcon(faCoffee)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBirthdayCake} onClick={() => this.setIcon(faBirthdayCake)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAnchor} onClick={() => this.setIcon(faAnchor)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAddressBook} onClick={() => this.setIcon(faAddressBook)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAmbulance} onClick={() => this.setIcon(faAmbulance)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faWineBottle} onClick={() => this.setIcon(faWineBottle)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faAtom} onClick={() => this.setIcon(faAtom)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBaby} onClick={() => this.setIcon(faBaby)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBaseballBall} onClick={() => this.setIcon(faBaseballBall)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBasketballBall} onClick={() => this.setIcon(faBasketballBall)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faFootballBall} onClick={() => this.setIcon(faFootballBall)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faShoppingBag} onClick={() => this.setIcon(faShoppingBag)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBatteryEmpty} onClick={() => this.setIcon(faBatteryEmpty)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBatteryFull} onClick={() => this.setIcon(faBatteryFull)} />
                <FontAwesomeIcon style={{ margin: '5px' }} icon={faBook} onClick={() => this.setIcon(faBook)} />
            </div>
        </div>;
    }
}

export default IconInsert;
