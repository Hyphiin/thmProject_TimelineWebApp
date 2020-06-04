import React from "react";

function Container(props) {
    const drop = e => {
        e.preventDefault();
        const entry_id = e.dataTransfer.getData('entry_id');

        const entry = document.getElementById(entry_id);
        entry.style.display = 'block';

        e.target.appendChild(entry);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div id={props.id} onDrop={drop} onDragOver={dragOver} className={props.className}>
            {props.children}
        </div>
    )
}

export default Container