import React, { useState, useRef } from 'react';
import BJJLogs from './BJJLogs';
import app from './app.css';

export default function App() {
   const [logs, setBJJLogs] = useState([{id:1, name:'bjjlog1', completed:false}]);
   const instructionalRef = useRef();
   const techniqueRef = useRef();
    function createLog(e) {

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


