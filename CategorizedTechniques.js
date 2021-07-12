import React from 'react'
import CategorizedTechnique from './CategorizedTechnique';

export default function CategorizedTechniques({addCatTechNote, editCatTechNote, handleDeleteCatTechNote, catTechniques, handleDeleteCatTechnique}) {
 
    return (
       <div id="categorizedLogsCon">
           {catTechniques.map(catTechnique => {
             return  <CategorizedTechnique addCatTechNote={addCatTechNote} editCatTechNote={editCatTechNote} handleDeleteCatTechNote={handleDeleteCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} key={catTechnique.id} catTechnique={catTechnique} />
           })}
       </div>
    )
}
