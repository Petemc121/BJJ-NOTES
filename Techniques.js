import React from 'react'
import Technique from './Technique'

export default function Techniques({techniques, handleDeleteTechnique, modifyNotes}) {
   
  

    return (
       
        <div id="bjjLogsCon">
            
           {techniques.map(technique => {

               return <Technique key={technique.id} modifyNotes={modifyNotes} handleDeleteTechnique={handleDeleteTechnique} technique={technique} />
           })}
           
        </div>
      
    )

    
}

