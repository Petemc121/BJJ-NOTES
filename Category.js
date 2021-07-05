import React, {useState} from 'react'


export default function Category({category}) {
        const [catTechniques, setCatTechniques] = useState([])
    function handleAddCatTechnique() {

       
        setCatTechniques(prevCatTechniques => {
           
            return [...prevCatTechniques,  ]
            
        })


    }

    const handleDragOver = () =>
    {
        
    }

    const handleDragEnter = (e) =>
    {
        e.target.style.filter = "brightness(200%)";
    }

    const handleDragLeave = (e) =>
    {
        e.target.style.filter = "brightness(100%)";
    }

    

    return (
        <div onDragEnter={handleDragEnter}  onDragLeave={handleDragLeave} droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1>{category.category + ":"}</h1>
        </div>
    )
}
