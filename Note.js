import React, {useState, useRef} from 'react'


export default function Note({note}) {
   const [edit, setEdit] = useState("Your note will appear here.")
   const [editDisplay, setEditDisplay] = useState("block");
   const [noteDisplay, setNoteDisplay] = useState("none");
   const noteRef = useRef();
   const [updateDisplay, setUpdateDisplay] = useState("none");
        
    
 const handleUpdateNote = () => {
   let editValue = noteRef.current.value
       setEdit(editValue);
       setUpdateDisplay("none")
       setNoteDisplay("none")
       setEditDisplay("block")
       editValue = null;
    }

    const handleEditNote = () =>
    {
        setEditDisplay("none")
        setNoteDisplay("block")
        setUpdateDisplay("block")
        
    }





    return (
        <div>
            <h4>Note {note.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} style={{display: noteDisplay}} type="text" placeholder="Place your note here."></input>
            <div class="notesOut">{edit}</div>
            <button class="update" style={{display: updateDisplay}} onClick={handleUpdateNote}>Update</button> 
            <button class="edit" style={{display: editDisplay, margin:"10px 0px 10px 0px"}} onClick={handleEditNote}>Edit</button> 
            </div>
        </div>
    )
}
