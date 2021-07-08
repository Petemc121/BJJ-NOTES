import React, { useState, useRef } from 'react';
import Techniques from './Techniques';
import Categories from './Categories';


export default function App() {
   const [techniques, setTechniques] = useState([]);
   const [categories, setCategories] = useState([]);
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
      
           return [...prevTechniques, {id: techniqueNo, technique:technique, color:color, notes:null}];

       })

    
       
  
       techniqueRef.current.value = null
    }

    function modifyNotes(notes) {
        setTechniques(techniques => {
          return  techniques.forEach(technique => {
               technique.notes = notes;
            })
        })
    }

    function handleCreateCategory()
    {
        let color = "#" + getRandom(2000000, 1000000).toString(16);
        const category = categoryRef.current.value;

        if(category === "")
        { alert("Please enter a category.") 
        return;
         }

         setCategories(prevCategories => {
             return [...prevCategories, {id:catNo, category:category, color:color }]
         })

         categoryRef.current.value = null;

    }

    function getRandom(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
   const handleDeleteTechnique = (techniqueID) => {
    setTechniques(techniques => {return techniques.filter(technique => technique.id !== techniqueID)}) 
}



    
   

    return (
        <>
        <div id="mainHeader" class="header">BJJ NOTES</div>
        <div id="description" class="header">
            <p>Add your techniques below. You can also add categories if you scroll down further (Instructionals, positions etc).</p>
            <p>Feel free to drag and drop your techniques into their respective categories.</p>
        </div>
        <div class="inContain">
        <div id="techniques" class="header">Techniques</div>
        <label for="technique">Technique</label>    
        <input ref={techniqueRef} id="technique" class="input" type="text"></input>
        <button onClick={createLog} id="addNote" class="input">Add Technique</button>
        </div>
        <Techniques handleDeleteTechnique={handleDeleteTechnique} modifyNotes={modifyNotes} techniques={ techniques } />
        <div class="inContain">
        <label for="instructional">Categories</label>    
        <input ref={categoryRef} id="category" class="input" type="text"></input>
        <button onClick={handleCreateCategory} id="addCategory" class="input">Add Category</button>
        </div>
        <Categories techniques={techniques} modifyNotes={modifyNotes} handleDeleteTechnique={handleDeleteTechnique} categories={categories}/>
        </>
    )
    
}


