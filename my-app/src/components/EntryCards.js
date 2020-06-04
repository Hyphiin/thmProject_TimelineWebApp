import React from "react";

function Entry(props){
    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('entry_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return(
        <div className={props.className} id={props.id} draggable={props.draggable} onDragStart={dragStart} onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default Entry