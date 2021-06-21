import React, {useRef} from 'react'

export default function Note(props) {
    let noteRef = useRef();

    function updateNote() {
        props.note.noteText = noteRef
    }

    return (
        <div>
            <h4>Note {props.note.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} type="text" value="Add your note here"></input>
            <div>{props.note.noteText}</div>
            
            <button onClick={updateNote}>Update</button>
            </div>
        </div>
    )
}
