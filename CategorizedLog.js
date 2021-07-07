import React, {useState,useRef} from 'react'
import Notes from './Notes'

export default function CategorizedLog({technique, handleDeleteLog}) {
    const addButton = useRef();
    const [notes, setNotes] = useState([])
    

    function handleAddNote() {

       
        setNotes(notes => {
           
            return [...notes, {noteText:"", noteID:notes.length + 1, noteTitle:"Note " + (notes.length + 1)}]
            
        })


    }

    function handleDragStart(e) {
        e.target.classList.add('dragging');  // this / e.target is the source node.
        
      }

      
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');  // this / e.target is the source node.
        
      }


    return (
        <div draggable="true" id={technique.id} onDrag={handleDragStart} onDragEnd={handleDragEnd} style={{backgroundColor: technique.color}} class="log">
        <h4>Technique</h4>
         {technique.technique}

         <h4>Notes</h4>

         <Notes key={technique.id} notes={notes}/>

         <button ref={addButton} onClick={handleAddNote} id="add">+</button>
         <button ref={addButton} onClick={() => handleDeleteLog(technique.id)} id="delete">Delete Note</button>

     </div>
    )
}
