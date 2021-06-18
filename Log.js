import React, {useState, useRef} from 'react'
import Notes from './Notes.js'

export default function Log({log}) {
    
    const save = useRef();
    const cancel = useRef();
    const con = useRef();
    let noteId = 0;
    const [notes, setNotes] = useState([])
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

    function saved() {
        

        setNotes(notes => {
            noteId++;
            return [...notes, {noteText:"", noteID:noteId}]
        })
    }

   


    return (
        <div class="log">
            <h4>Instructional</h4>
          {log.instructional}
           <h4>technique</h4>
            {log.technique}

            <h4>Notes</h4>

            <Notes notes={notes}/>

            <div ref={con} id="saveCancelCon">
            <button ref={save} onClick={saved} class="saveCancel">Save</button>
            <button ref={cancel} onClick={cancelled} class="saveCancel">cancel</button>
            </div>
            <button id="edit" onClick={edit} >Edit</button>

        </div>
    )
}
