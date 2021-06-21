import React from 'react'
import Note from './Note.js'

export default function Notes(props) {


    return (
        <div class="notesCon">
            {props.notes.map(note => {
                console.log(note.id)
                return <Note key={note.id} note={note}/>;
            })}
        </div>
    )
}
