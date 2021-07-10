import React from 'react'

export default function CatTechNote(editCatTechNote, catTechnique, catTechNote) {

    const [editDisplay, setEditDisplay] = useState("block");
    const [noteDisplay, setNoteDisplay] = useState("none");
    const noteRef = useRef();
    const [updateDisplay, setUpdateDisplay] = useState("none");
         
     
  const handleUpdateCatTechNote = () => {
    let editValue = noteRef.current.value
    editCatTechNote(editValue,note.noteID, technique)
        setUpdateDisplay("none")
        setNoteDisplay("none")
        setEditDisplay("block")
        editValue = null;
     }
 
     const handleEditCatTechNote = () =>
     {
         setEditDisplay("none")
         setNoteDisplay("block")
         setUpdateDisplay("block")
         
     }
 
 

    return (
        <div>
               <h4>Note {catTechNote.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} style={{display: noteDisplay}} type="text" placeholder="Place your note here."></input>
            <div class="notesOut">{catTechNote.noteText}</div>
            <button class="update" style={{display: updateDisplay}} onClick={handleUpdateCatTechNote}>Update</button> 
            <button class="edit" style={{display: editDisplay, margin:"10px 0px 10px 0px"}} onClick={handleEditCatTechNote}>Edit</button> 
            </div>
        </div>
    )
}
