import React, { useState, useRef } from 'react';
import Techniques from './Techniques';
import Categories from './Categories';
import CategoryKeys from './CategoryKeys';


export default function App() {
   const [techniques, setTechniques] = useState([]);
   const [categories, setCategories] = useState([]);
   const [categoryKeys, setCategoryKeys] = useState([]);
   const categoryRef = useRef();
   const techniqueRef = useRef();
   let techniqueNo = Math.floor(Math.random()*100000);
   let catNo = Math.floor(Math.random()*100000);
   
   
   function createLog(e) {
       const technique = techniqueRef.current.value;
       let color = "#" + getRandom(2000000, 1000000).toString(16);
    
       for(let i = 0; i < techniques.length; i++)
       { 
           if (color === techniques[i].color)
           {
                const replace = color.replace('#', '');
                const number= parseInt(replace)
                const newNumber = number + 100000;
                color = newNumber
           }
       }

       if(technique === "")
       { alert("Please enter a technique.") 
       return;
        }
        
       setTechniques(prevTechniques => {
      
           return [...prevTechniques, {id: techniqueNo, technique:technique, color:color, notes:[]}];

       });

  
       techniqueRef.current.value = null;
    }

    function addNote(notes, chosenTechnique) {
        setTechniques(techniques => {
          let  updatedTechniques = [];
            techniques.forEach(technique => {
                if (technique.id == chosenTechnique.id)
                {
                let updatedTechnique = {id: chosenTechnique.id, technique: chosenTechnique.technique, color: chosenTechnique.color, notes: notes}

                updatedTechniques.push(updatedTechnique)
                } else{
                    
                    updatedTechniques.push(technique)
                }
            
             console.log(updatedTechniques)
            })
            
            return updatedTechniques;
        });
        
    }

    function editNote(noteEdit, noteID, chosenTechnique) {
        setTechniques(techniques => {
            let updatedTechniques = [];
            
            techniques.forEach(technique => {
                let updatedTechniqueNotes = [];
                if (technique.id === chosenTechnique.id)
                 {

                    technique.notes.forEach(techniqueNote => {
                        if (techniqueNote.noteID === noteID)
                        { 
                            updatedTechniqueNotes.push({noteText:noteEdit, noteID:noteID, noteTitle:"Note " + (noteID)})
                        } else
                        {

                            updatedTechniqueNotes.push({noteText:techniqueNote.noteText, noteID:techniqueNote.noteID, noteTitle:"Note " + (techniqueNote.noteID)})
                        }
                    })
                    updatedTechniques.push({id: technique.id, technique: technique.technique, color: technique.color, notes: updatedTechniqueNotes})


                  } else
                  {
                    updatedTechniques.push({id: technique.id, technique: technique.technique, color: technique.color, notes:technique.notes})
                  }


                })

                return updatedTechniques;
            })

        }


    

    function handleCreateCategory()
    {

        // GREEN PURPLE BLUE BROWN RED YELLOW ORANGE BROWN GREY WHITE
        const colorArray = ["#08892c","#8e057e","#3f3f8c","#874c47", "#dd9300", "#a32f2f", "#d1ca00", "#2d2020"]
        const category = categoryRef.current.value;

        if(category === "")
        { alert("Please enter a category.") 
        return;
         }

         setCategories(prevCategories => {
             return [...prevCategories, {id:catNo, category:category, color:colorArray[categories.length], catTechniques:[] }]
         })

         setCategoryKeys(prevCategoryKeys => {
            return [...prevCategoryKeys, {id:catNo, category:category, color:colorArray[categories.length], catKeyTechniques:[] }]
         })

         categoryRef.current.value = null;

    }

    function getRandom(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
   const handleDeleteTechnique = (techniqueID) => {
    setTechniques(techniques => {return techniques.filter(technique => technique.id !== techniqueID)}) 
}

const handleDeleteCategory = (categoryID) =>
{
    setCategories(categories => {return categories.filter(category => category.id !== categoryID)})
    setCategoryKeys(categoryKeys => {return categoryKeys.filter(categoryKey => categoryKey.id !== categoryID)})
}



    function handleDeleteNote(noteID, techniqueID)
    {
        setTechniques(techniques => {
           return techniques.map(technique =>
                {
                    
                    if (technique.id === techniqueID)
                    {
                       const newNotes = technique.notes.filter(note => note.noteID != noteID);

                       return {id: technique.id, technique: technique.technique, color: technique.color, notes: newNotes}

                    } else
                    {
                        return {id: technique.id, technique: technique.technique, color: technique.color, notes: technique.notes}
                    }

                    
                })
        })
    }

    
    const handleDeleteCatTechnique = (techniqueID, categoryID) => {
        setCategories(categories => {
           let updatedCategories = []
            for (let i = 0; i < categories.length; i++)
            {
                if (categories[i].id === categoryID)
                {

         updatedCategories.push( {id:categories[i].id, category:categories[i].category, color:categories[i].color, catTechniques:[categories[i].catTechniques.filter(catTechnique => catTechnique[i].id !== techniqueID)] })
                }
            }
        }) 
    }
    


function addCatTechNote(newNotes, chosenCatTechnique) {
    setCategories(categories => {
      let  updatedCategories = [];
        categories.forEach(category => {
            let updatedCatTechniques = [];
            category.catTechniques.forEach(catTechnique =>
                {
            if (catTechnique.id == chosenCatTechnique.id)
            {
            let updatedTechnique = {id: chosenCatTechnique.id, technique: chosenCatTechnique.technique, color: chosenCatTechnique.color, notes: newNotes}

            updatedCatTechniques.push(updatedTechnique)
            } else{
                
                updatedCatTechniques.push(catTechnique)
            }
        
        
        })
        updatedCategories.push({ id:category.id, category:category.category, color:category.color, catTechniques:updatedCatTechniques })
        })
        
        return updatedCategories;
    });
    
}

function handleDeleteCatTechNote(noteID, techniqueID)
{
    setCategories(categories => {
     return categories.map(category =>
            {
                
       let updatedCatTechniques =  category.catTechniques.map(catTechnique =>
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

            return {id:category.id, category:category.category, color:category.color, catTechniques:updatedCatTechniques }
    })
})
}

const handleDrop = (e, techniques) =>
{
 
  const draggable = document.querySelector('.dragging');
  e.target.style.filter = "brightness(100%)";
  techniques.forEach(technique => {

        if (draggable.id === technique.id.toString())
        {
           const oldColor = category.color;
           console.log(oldColor)
            
       const newColor = lighten(oldColor);
        
        setCategories(categories => {

          
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


    return (
        <>
        <div id="mainHeader" class="header">BJJ NOTES</div>
        <div id="description" class="header">
            <p>Add your techniques below. You can also add categories if you scroll down further (Instructionals, positions etc).</p>
            <p>Feel free to drag and drop your techniques into their respective categories.</p>
        </div>
       
        <CategoryKeys categoryKeys={categoryKeys} />
        <div class="inContain">
        <label for="technique">Technique</label>    
        <input ref={techniqueRef} id="technique" class="input" type="text"></input>
        <button onClick={createLog} id="addNote" class="input">Add Technique</button>
        </div>
        <div id="techniqueContain">
        <Techniques handleDeleteTechnique={handleDeleteTechnique} handleDeleteNote={handleDeleteNote}  editNote={editNote} addNote={addNote} techniques={ techniques } />
        </div>
        <div id="categoriesIn" class="inContain">
        <label for="instructional">Category</label>    
        <input ref={categoryRef} id="category" class="input" type="text"></input>
        <button onClick={handleCreateCategory} id="addCategory" class="input">Add Category</button>
        </div>
        <Categories handleDeleteCategory={handleDeleteCategory} techniques={techniques} editNote={editNote} addNote={addNote} handleDeleteTechnique={handleDeleteTechnique} categories={categories}/>
        </>
    )
    
}


