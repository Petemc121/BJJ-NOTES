import React, {useState, useRef} from 'react'
import Notes from './Notes.js'

export default function Log({log, handleDeleteLog}) {
    

    const addButton = useRef();
    const [notes, setNotes] = useState([])
    

    function handleAddNote() {

       
        setNotes(notes => {
           
            return [...notes, {noteText:"", noteID:notes.length + 1, noteTitle:"Note " + (notes.length + 1)}]
            
        })


    }

    function handleDragStart(e) {
        e.target.style.display = 'none';  // this / e.target is the source node.
    
      }

   


    return (
        <div draggable="true" onDrag={handleDragStart}  style={{backgroundColor: log.color}} class="log">
           <h4>Technique</h4>
            {log.technique}

            <h4>Notes</h4>

            <Notes key={log.id} notes={notes}/>

            <button ref={addButton} onClick={handleAddNote} id="add">+</button>
            <button ref={addButton} onClick={() => handleDeleteLog(log.id)} id="delete">Delete Note</button>

        </div>
    )
}
