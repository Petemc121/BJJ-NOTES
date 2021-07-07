import React from 'react'
import CategorizedLog from './CategorizedLog';

export default function CategorizedLogs({catTechniques, handleDeleteLog}) {
    return (
       <div class="categorizedLogsCon">
           {catTechniques.map(technique => {
             return  <CategorizedLog handleDeleteLog={handleDeleteLog} key={technique.id} technique={technique} />
           })}
       </div>
    )
}
