import React, {useState, useRef} from 'react'
import Notes from './Notes.js'

export default function Log({log}) {
    
    const save = useRef();
    const cancel = useRef();
    const con = useRef();
    const addButton = useRef();
    const [notes, setNotes] = useState([])
    console.log(notes)
    function edit() {
        con.current.style.display ="flex"
        save.current.style.display ="block"
        cancel.current.style.display ="block"
     
    }

    function cancelled() {
        con.current.style.display ="none"
        save.current.style.display ="none"
        cancel.current.style.display ="none"

    }

    function handleAddNote() {

       
        setNotes(notes => {
           
            return [...notes, {noteText:"", noteID:notes.length + 1, noteTitle:"Note " + notes.length + 1}]
            
        })


    }

   


    return (
        <div class="log">
            <h4>Instructional</h4>
          {log.instructional}
           <h4>technique</h4>
            {log.technique}

            <h4>Notes</h4>

            <Notes key={log.id} notes={notes}/>

            <button ref={addButton} onClick={handleAddNote} id="add">+</button>

            <div ref={con} id="saveCancelCon">
            <button ref={save} class="saveCancel">Save</button>
            <button ref={cancel} onClick={cancelled} class="saveCancel">cancel</button>
            </div>

        </div>
    )
}
