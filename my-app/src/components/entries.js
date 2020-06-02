import React from 'react'

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

/*die einzelnen Einträge des Zeitstrahls werden hier als Array aufgelistet mit Datum etc.*/

const entry = [
    {
        text: "first eintrag",
        date: "02.05.2020",
        category: {
            tag: "medium",
        }
    },
    {
        text: "second eintrag: hier soll gaaanz viel Text stehen, damit ich mehr erkennen kann. und noch ein bisschen",
        date: "02.05.2020",
        category: {
            tag: "last",
        }
    },
    {
        text: "dritter eintrag: hier soll gaaanz viel Text stehen, damit ich mehr erkennen kann. und noch ein bisschen",
        date: "02.05.2020",
        category: {
            tag: "last",
        }
    },
    {
        text: "vierter eintrag: hier ",
        date: "02.05.2020",
        category: {
            tag: "last",
        }
    }
];


export default entry;
