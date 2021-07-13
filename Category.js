import React, {useState} from 'react'
import CategorizedTechniques from './CategorizedTechniques';


export default function Category({category, handleDeleteCategory, techniques, handleDeleteTechnique}) {
        
    const [catTechniques, setCatTechniques] = useState([]);

    const handleDrop = (e) =>
    {
     
      const draggable = document.querySelector('.dragging');
      e.target.style.filter = "brightness(100%)";
      techniques.forEach(technique => {

            if (draggable.id === technique.id.toString())
            {
               const oldColor = category.color;
               console.log(oldColor)
                
           const newColor = lighten(oldColor);
                
           
               
               

            setCatTechniques(prevCatTechniques => {

              
                return [...prevCatTechniques, {id: technique.id , technique:technique.technique, color:newColor, notes: technique.notes}]
                
            })
            }

            handleDeleteTechnique(technique.id);
        })
       

    }
        function lighten(hex)
        {   

         const removeHash = hex.substring(1,hex.length);
         const hexConvert = "0x" + removeHash
          const asNumber = parseInt(hexConvert);
          
          const alteredHex ='#' + (asNumber + 1000000).toString(16)

            return alteredHex;
            

        }

     

        const handleDeleteCatTechnique = (techniqueID) => {
            setCatTechniques(catTechniques => {return catTechniques.filter(catTechnique => catTechnique.id !== techniqueID)}) 
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

    function handleDeleteCatTechNote(noteID, techniqueID)
    {
        setCatTechniques(catTechniques => {
           return catTechniques.map(catTechnique =>
                {
                    
                    if (catTechnique.id === techniqueID)
                    {
                       const newNotes = catTechnique.notes.filter(note => note.noteID != noteID);

                       return {id: catTechnique.id, technique: catTechnique.technique, color: catTechnique.color, notes: newNotes}

                    } else
                    {
                        return {id: catTechnique.id, technique: catTechnique.technique, color: catTechnique.color, notes: catTechnique.notes}
                    }

                    
                })
        })
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
        <div id={category.id} onDrop={handleDrop} onDragOver={handleDragOver}  onDragLeave={handleDragLeave} droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1 class="categoryHeaders">{category.category }</h1>
            <p style={{fontFamily:'"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Click the technique name to expand or contract.</p>
            <CategorizedTechniques handleDeleteCatTechNote={handleDeleteCatTechNote} addCatTechNote={addCatTechNote} editCatTechNote={editCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} catTechniques={catTechniques}/>
            <button class="categoryButtons" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
        </div>
    )
}
