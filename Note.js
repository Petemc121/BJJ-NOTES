import React, {useState, useRef} from 'react'
import UpdateButton from './UpdateButton'
import EditButton from './EditButton'
import NoteInput from './NoteInput'

export default function Note({note}) {
   const [edit, setEdit] = useState("Your note will appear here.")
   const [editDisplay, setEditDisplay] = useState("block");
   const [noteDisplay, setNoteDisplay] = useState("none");
   const noteRef = useRef();
   const [updateDisplay, setUpdateDisplay] = useState("none");
        
    
 const updateNote = () => {
   let editValue = noteRef
       setEdit(editValue);
       setUpdateDisplay("none")
       setNoteDisplay("none")
       setEditDisplay("block")
       editValue = null;
    }

    const editNote = () =>
    {
        
        setEditDisplay("none")
        setNoteDisplay("block")
        setUpdateDisplay("block")
        console.log(updateDisplay)
        console.log(editDisplay)
    }





    return (
        <div>
            <h4>Note {note.noteID}:</h4>
            <div class="noteContain">
            <NoteInput ref={noteRef} display={noteDisplay} />
            <div>{edit}</div>
            
            <UpdateButton display={updateDisplay} onClick={updateNote} />
            <EditButton display={editDisplay} onClick={editNote} />
            </div>
        </div>
    )
}
