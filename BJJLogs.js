import React, {useState} from 'react'
import Log from './Log'

export default function BJJLogs({logs}) {

    const [notes, setNotes] = useState(["Notes here", "Notes here", "Notes here"])



    return (
       
        <div id="bjjLogsCon">
            
           {logs.map(log => {
               return <Log key={log.id} log={log} />
           })}
           
        </div>
      
    )
}

