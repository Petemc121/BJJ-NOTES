import React, {useState} from 'react'


export default function Category({category}) {
        const [catTechniques, setCatTechniques] = useState([])
    function handleAddTechnique() {

       
        setCatTechniques(prevCatTechniques => {
           
            return [...prevCatTechniques,  ]
            
        })


    }

    return (
        <div droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1>{category.category + ":"}</h1>
        </div>
    )
}
