import React from 'react'

export default function Notes(notes) {
    return (
        <div class="notesCon">
            {notes.map(note => {
                return <Note key={note.id} note={note}/>;
            })}
        </div>
    )
}
