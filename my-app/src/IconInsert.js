import React from 'react';
import './App.css';
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
    faBatteryFull, faBook
} from "@fortawesome/free-solid-svg-icons";

class IconInsert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            iconSet:{
                coffee: faCoffee,
                cake: faBirthdayCake,
                address: faAddressBook,
                ambulance: faAmbulance,
                wine: faWineBottle,
                anchor: faAnchor,
                atom: faAtom,
                baby: faBaby,
                baseball: faBaseballBall,
                basketball: faBasketballBall,
                soccer: faFootballBall,
                shopping: faShoppingBag,
                batteryempty: faBatteryEmpty,
                batteryfull: faBatteryFull,
                book: faBook
            },
            icon: this.props.icon
        }
        this.setIcon = this.setIcon.bind(this)
    }

    setIcon(e) {
        const icon = this.state.iconSet[e.target.attributes.icon.value]
        this.setState({
            icon: icon
        });
    }
    render() {
        return  <div className="icon">
            Icon:
            <div className="iconselect">
                <input type="radio" name="radio" onClick={this.setIcon} icon="coffee"/>
                <FontAwesomeIcon icon={faCoffee} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="cake" />
                <FontAwesomeIcon icon={faBirthdayCake} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="anchor" />
                <FontAwesomeIcon icon={faAnchor} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="address" />
                <FontAwesomeIcon icon={faAddressBook} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="ambulance" />
                <FontAwesomeIcon icon={faAmbulance} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="wine" />
                <FontAwesomeIcon icon={faWineBottle} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="atom" />
                <FontAwesomeIcon icon={faAtom} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="baseball" />
                <FontAwesomeIcon icon={faBaseballBall} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="basketball" />
                <FontAwesomeIcon icon={faBasketballBall} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="soccer" />
                <FontAwesomeIcon icon={faFootballBall} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="shopping" />
                <FontAwesomeIcon icon={faShoppingBag} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="book" />
                <FontAwesomeIcon icon={faBook} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="batteryempty" />
                <FontAwesomeIcon icon={faBatteryEmpty} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="batteryfull" />
                <FontAwesomeIcon icon={faBatteryFull} />

                <input type="radio" name="radio" onClick={this.setIcon} icon="baby" />
                <FontAwesomeIcon icon={faBaby} />

                <input type="radio" name="radio" onClick={this.setIcon} icon= "" />
                kein Icon

            </div>
            <span className= "result">
                {"Select Icon: " + this.state.icon ? (
                    <FontAwesomeIcon icon={this.state.icon} />
                ) : (
                    ""
                )}
            </span>
        </div>;
    }
}

export default IconInsert;
