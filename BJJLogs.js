import React from 'react'
import Log from './Log'

export default function BJJLogs({logs, handleDeleteLog}) {
    function handleDragStart(e) {
        this.style.opacity = '0.4';  // this / e.target is the source node.
      }

    return (
       
        <div id="bjjLogsCon">
            
           {logs.map(log => {

               return <Log key={log.id} handleDeleteLog={handleDeleteLog} log={log} />
           })}
           
        </div>
      
    )

    
}

