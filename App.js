import React, { useState, useRef } from 'react';
import BJJLogs from './BJJLogs';
import app from './app.css';

export default function App() {
   const [logs, setBJJLogs] = useState([]);
   const instructionalRef = useRef();
   const techniqueRef = useRef();
   let logNo = 0;
    function createLog(e) {
       const instructional =  instructionalRef.current.value;
       const technique = techniqueRef.current.value;
       if(technique === "") return;
       setBJJLogs(prevLogs => {
           logNo++
           return [...prevLogs, {id: logNo, instructional:instructional, technique:technique, note1:"Place your notes here.", note2:"Place your notes here.", note3:"Place your notes here.", edit:false}];
       })
       instructionalRef.current.value = null
       techniqueRef.current.value = null
    }

    
   

    return (
        <>
        <div id="inContain">
        <label for="instructional">Instructional</label>    
        <input ref={instructionalRef} id="instructional" class="input" type="text"></input>
        <label for="technique">Technique</label>    
        <input ref={techniqueRef} id="technique" class="input" type="text"></input>
        <button onClick={createLog} class="input">Add Technique</button>
        </div>
        <BJJLogs logs={ logs } />
        </>
    )
    
}


