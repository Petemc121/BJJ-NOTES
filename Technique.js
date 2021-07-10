import React, {useRef} from 'react'
import Notes from './Notes.js'

export default function Technique({technique, handleDeleteTechnique, editNote, addNote}) {
    

    const addButton = useRef();

    function handleAddNote() {
           
            const newNotes = [...technique.notes, {noteText:"Add your note here.", noteID:technique.notes.length + 1, noteTitle:"Note " + (technique.notes.length + 1)}]
            addNote(newNotes, technique);

    }

    function handleDragStart(e) {
        e.target.classList.add('dragging');  // this / e.target is the source node.
        
      }

      
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');  // this / e.target is the source node.
        
      }

   


    return (
        <div draggable="true" id={technique.id} onDrag={handleDragStart} onDragEnd={handleDragEnd}  style={{backgroundColor: technique.color}} class="log">
           <h4>Technique</h4>
            {technique.technique}

            <h4>Notes</h4>

            <Notes key={technique.id} editNote={editNote} technique={technique}/>

            <button ref={addButton} onClick={handleAddNote} id="add">+</button>
            <button ref={addButton} onClick={() => handleDeleteTechnique(technique.id)} id="delete">Delete</button>

        </div>
    )
}
