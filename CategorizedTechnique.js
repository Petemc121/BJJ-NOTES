
import React, {useRef} from 'react'
import CatTechNotes from './CatTechNotes'

export default function CategorizedTechnique({addCatTechNote, editCatTechNote, catTechnique, handleDeleteLog}) {
    const addButton = useRef();
    
    

    function handleAddCatTechNote() {

        const newNotes = [...catTechnique.notes, {noteText:"Add your note here.", noteID:catTechnique.notes.length + 1, noteTitle:"Note " + (catTechnique.notes.length + 1)}]
        addCatTechNote(newNotes, catTechnique);

    }

    function handleDragStart(e) {
        e.target.classList.add('dragging');  // this / e.target is the source node.
        
      }

      
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');  // this / e.target is the source node.
        
      }


    return (
        <div draggable="true" id={catTechnique.id} onDrag={handleDragStart} onDragEnd={handleDragEnd} style={{backgroundColor: catTechnique.color}} class="log">
        <h4>Technique</h4>
         {catTechnique.technique}

         <h4>Notes</h4>

         <CatTechNotes key={catTechnique.id} editCatTechNote={editCatTechNote} catTechnique={catTechnique}/>

         <button ref={addButton} onClick={handleAddCatTechNote} id="add">+</button>
         <button ref={addButton} onClick={() => handleDeleteLog(catTechnique.id)} id="delete">Delete</button>

     </div>
    )
}
