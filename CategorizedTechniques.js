import React from 'react'
import CategorizedTechnique from './CategorizedTechnique';

export default function CategorizedTechniques({category, addCatTechNote, editCatTechNote, handleDeleteCatTechNote, catTechniques, handleDeleteCatTechnique}) {
 
    return (
       <div id="categorizedLogsCon">
           {catTechniques.map(catTechnique => {
             return  <CategorizedTechnique category={category} addCatTechNote={addCatTechNote} editCatTechNote={editCatTechNote} handleDeleteCatTechNote={handleDeleteCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} key={catTechnique.id} catTechnique={catTechnique} />
           })}
       </div>
    )
}
