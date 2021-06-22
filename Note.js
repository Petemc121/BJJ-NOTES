import React, {useState, useRef} from 'react'

export default function Note({note}) {
   const [edit, setEdit] = useState({
                                         id: note.noteID,
                                         text: "hello"
                                                             })

    let noteRef = useRef();                                                           



    return (
        <div>
            <h4>Note {note.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} type="text" placeholder="Add your note here"></input>
            <div>{edit.text}</div>
            
            <button>Update</button>
            </div>
        </div>
    )
}
