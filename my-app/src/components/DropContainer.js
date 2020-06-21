import React from "react";

function DropContainer(props){
    const drop = (e) => {
        e.preventDefault();

        const entry_id = e.dataTransfer.getData('entry_id');
        const entry = document.getElementById(entry_id);
        entry.style.display = 'flex';

        e.target.appendChild(entry);
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    return(
        <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default DropContainer