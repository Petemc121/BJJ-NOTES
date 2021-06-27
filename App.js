import React, { useState, useRef } from 'react';
import BJJLogs from './BJJLogs';


export default function App() {
   const [logs, setBJJLogs] = useState([]);
   const instructionalRef = useRef();
   const techniqueRef = useRef();
   let logNo = Math.floor(Math.random()*100000);
    function createLog(e) {
       const instructional =  instructionalRef.current.value;
       const technique = techniqueRef.current.value;
       let color = "#" + getRandom(14000000, 8000000).toString(16);
    
       for(let i = 0; i < logs.length; i++)
       { 
           if (color == logs[i].color)
           {
                const replace = color.replace('#', '');
                const number= parseInt(replace)
               const newNumber = number + 100000;
                color = newNumber
           }
       }

       if(technique === "")
       { alert("Please enter a technique.") 
       return;
        }
        
       setBJJLogs(prevLogs => {
        console.log(logs)
           return [...prevLogs, {id: logNo, instructional:instructional, technique:technique, color:color}];

       })
       
       instructionalRef.current.value = null
       techniqueRef.current.value = null
    }

    function getRandom(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
   const handleDeleteLog = (logID) => {
    setBJJLogs(logs => {return logs.filter(log => log.id !== logID)})
    
   
}

    
   

    return (
        <>
        <div id="header">BJJ NOTES</div>
        <div id="inContain">
        <label for="instructional">Instructional</label>    
        <input ref={instructionalRef} id="instructional" class="input" type="text"></input>
        <label for="technique">Technique</label>    
        <input ref={techniqueRef} id="technique" class="input" type="text"></input>
        <button onClick={createLog} id="addNote" class="input">Add Technique</button>
        </div>
        <BJJLogs handleDeleteLog={handleDeleteLog} logs={ logs } />
        </>
    )
    
}


