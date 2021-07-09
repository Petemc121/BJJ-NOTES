import React from 'react'
import CategorizedTechnique from './CategorizedTechnique';

export default function CategorizedTechniques({catTechniques, handleDeleteLog}) {
    return (
       <div id="categorizedLogsCon">
           {catTechniques.map(catTechnique => {
             return  <CategorizedTechnique handleDeleteLog={handleDeleteLog} key={catTechnique.id} technique={catTechnique} />
           })}
       </div>
    )
}
