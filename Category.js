import React, {useState} from 'react'
import CategorizedTechniques from './CategorizedTechniques';


export default function Category({category, techniques, handleDeleteTechnique}) {
        
    const [catTechniques, setCatTechniques] = useState([]);

    const handleDrop = (e) =>
    {
     
      const draggable = document.querySelector('.dragging');
      e.target.style.filter = "brightness(100%)";
      techniques.forEach(technique => {

            if (draggable.id === technique.id.toString())
            {
            setCatTechniques(prevCatTechniques => {
               
                return [...prevCatTechniques, {id: technique.id , technique:technique.technique, color:technique.color, notes: technique.notes}]
                
            })
            }

            console.log(catTechniques)
        })
       

    }

    function addCatTechNote(notes, chosenCatTechnique) {
        setCatTechniques(catTechniques => {
          let  updatedCatTechniques = [];
            catTechniques.forEach(catTechnique => {
                if (catTechnique.id == chosenCatTechnique.id)
                {
                let updatedTechnique = {id: chosenCatTechnique.id, technique: chosenCatTechnique.technique, color: chosenCatTechnique.color, notes: notes}

                updatedCatTechniques.push(updatedTechnique)
                } else{
                    
                    updatedCatTechniques.push(catTechnique)
                }
            
             console.log(updatedCatTechniques)
            })
            
            return updatedCatTechniques;
        });
        
    }

    function editCatTechNote(noteEdit, noteID, chosenCatTechnique) {
        setCatTechniques(catTechniques => {
            let updatedCatTechniques = [];
            
            catTechniques.forEach(catTechnique => {
                let updatedCatTechniqueNotes = [];
                if (catTechnique.id === chosenCatTechnique.id)
                 {

                    catTechnique.notes.forEach(catTechniqueNote => {
                        if (catTechniqueNote.noteID === noteID)
                        { 
                            alert('same')
                            updatedCatTechniqueNotes.push({noteText:noteEdit, noteID:noteID, noteTitle:"Note " + (noteID)})
                        } else{

                            updatedCatTechniqueNotes.push({noteText:catTechniqueNote.noteText, noteID:catTechniqueNote.noteID, noteTitle:"Note " + (catTechniqueNote.noteID)})
                        }
                    })
                    updatedCatTechniques.push({id: catTechnique.id, technique: catTechnique.technique, color: catTechnique.color, notes: updatedCatTechniqueNotes})


                  } else
                  {
                    updatedCatTechniques.push({id: catTechnique.id, technique: catTechnique.technique, color: catTechnique.color, notes:catTechnique.notes})
                  }


                })

                return updatedCatTechniques;
            })

        }
    

    const handleDragOver = (e) =>
    {   e.preventDefault();
        e.target.style.filter = "brightness(200%)";
    }

    
 
    const handleDragLeave = (e) =>
    {
        e.target.style.filter = "brightness(100%)";
    }

    

    return (
        <div onDrop={handleDrop} onDragOver={handleDragOver}  onDragLeave={handleDragLeave} droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1>{category.category + ":"}</h1>
            <CategorizedTechniques addCatTechNote={addCatTechNote} editCatTechNote={editCatTechNote} handleDeleteTechnique={handleDeleteTechnique} catTechniques={catTechniques}/>
        </div>
    )
}
