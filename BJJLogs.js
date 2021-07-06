import React from 'react'
import Log from './Log'

export default function BJJLogs({logs, handleDeleteLog}) {
   

    return (
       
        <div id="bjjLogsCon">
            
           {logs.map(log => {

               return <Log key={log.id} handleDeleteLog={handleDeleteLog} log={log} />
           })}
           
        </div>
      
    )

    
}

