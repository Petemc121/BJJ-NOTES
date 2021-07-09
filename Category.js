import React, {useState} from 'react'
import CategorizedTechniques from './CategorizedTechniques';


export default function Category({category, techniques, handleDeleteTechnique}) {
        const [catTechniques, setCatTechniques] = useState([])

    

    const handleDrop = (e) =>
    {
     
      const draggable = document.querySelector('.dragging');
      e.target.style.filter = "brightness(100%)";
      techniques.forEach(technique => {

            if (draggable.id === technique.id.toString())
            {
            setCatTechniques(prevCatTechniques => {
               
                return [...prevCatTechniques, {id: technique.id, technique:technique.technique, color:technique.color} ]
                
            })
            }

            console.log(catTechniques)
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
        <div  onDrop={handleDrop} onDragOver={handleDragOver}  onDragLeave={handleDragLeave} droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1>{category.category + ":"}</h1>
            <CategorizedTechniques handleDeleteTechnique={handleDeleteTechnique} catTechniques={catTechniques}/>
        </div>
    )
}
