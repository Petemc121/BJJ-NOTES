import React from 'react'
import CategorizedTechnique from './CategorizedTechnique';

export default function CategorizedTechniques({addCatTechNote, editCatTechNote, catTechniques, handleDeleteLog}) {
 
    return (
       <div id="categorizedLogsCon">
           {catTechniques.map(catTechnique => {
             return  <CategorizedTechnique addCatTechNote={addCatTechNote} editCatTechNote={editCatTechNote} handleDeleteLog={handleDeleteLog} key={catTechnique.id} catTechnique={catTechnique} />
           })}
       </div>
    )
}
