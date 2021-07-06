import React from 'react'
import CategorizedLog from './CategorizedLog';

export default function CategorizedLogs({catTechniques}) {
    return (
       <div>
           {catTechniques.map(technique => {
               <CategorizedLog key={technique.id} technique={technique}/>
           })}
       </div>
    )
}
