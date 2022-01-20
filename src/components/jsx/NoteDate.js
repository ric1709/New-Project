import React from 'react';

function NoteDate(props) {
    const newDate=new Date(props.data)
    const month = newDate.toLocaleDateString("en-Us", {month: "long"})
    const week = newDate.toLocaleDateString("en-Us", {weekday: "long"})
    const date = newDate.toLocaleDateString("en-Us", {day : '2-digit'})
    return (
        <div>
            <h5>{week}, {date} {month}</h5>
        </div>
    );
}

export default NoteDate;