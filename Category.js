import React, {useState} from 'react'
import CategorizedLogs from './CategorizedLogs';


export default function Category({category, logs}) {
        const [catTechniques, setCatTechniques] = useState([])

    

    const handleDragOver = (e) =>
    {
        e.preventDefault();
        e.target.style.filter = "brightness(200%)";
      const draggable = document.querySelector('.dragging');
        logs.forEach(log => {

            if (draggable.id === log.id)
            {
            setCatTechniques(prevCatTechniques => {
           
                return [...prevCatTechniques, {id: log.id, technique:log.technique, color:log.color} ]
                
            })
        }
        })
       

    }

 
    const handleDragLeave = (e) =>
    {
        e.target.style.filter = "brightness(100%)";
    }

    

    return (
        <div  onDragOver={handleDragOver}  onDragLeave={handleDragLeave} droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1>{category.category + ":"}</h1>
            <CategorizedLogs catTechniques={catTechniques}/>
        </div>
    )
}
