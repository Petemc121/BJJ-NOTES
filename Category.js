import React, {useState} from 'react'
import CategorizedLogs from './CategorizedLogs';


export default function Category({category, logs, handleDeleteLog}) {
        const [catTechniques, setCatTechniques] = useState([])

    

    const handleDrop = () =>
    {
     
      const draggable = document.querySelector('.dragging');
        logs.forEach(log => {

            if (draggable.id === log.id.toString())
            {
            setCatTechniques(prevCatTechniques => {
               
                return [...prevCatTechniques, {id: log.id, technique:log.technique, color:log.color} ]
                
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
            <CategorizedLogs handleDeleteLog={handleDeleteLog} catTechniques={catTechniques}/>
        </div>
    )
}
