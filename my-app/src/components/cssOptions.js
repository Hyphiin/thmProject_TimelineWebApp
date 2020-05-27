import React from "react";

function cssOptions() {
        return (
            <form method="post">
                <p>Textfarbe</p>
                <input type="radio" id="tfschwarz" name="tfschwarz" checked="checked"/>
                <label htmlFor="tfschwarz">Schwarz</label>
                <input type="radio" id="tfgruen" name="tfgruen"/>
                <label htmlFor="tfgruen">Gr&uuml;n</label>
                <input type="radio" id="tfrot" name="tfrot"/>
                <label htmlFor="tfrot">Rot</label>
                <button type="submit">Formatieren</button>
            </form>
        )
}

export default cssOptions();