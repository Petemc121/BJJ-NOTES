import React, {useRef} from 'react'

export default function Log({log}) {
    
    const note1Ref = useRef();
    const note2Ref = useRef();
    const note3Ref = useRef();
    const save = useRef();
    const cancel = useRef();
    const con = useRef();
    function edit() {
        con.current.style.display ="flex"
        save.current.style.display ="block"
        cancel.current.style.display ="block"
        note1Ref.current.style.display ="block"
        note2Ref.current.style.display ="block"
        note3Ref.current.style.display ="block"
    }

    function cancelled() {
        con.current.style.display ="none"
        save.current.style.display ="none"
        cancel.current.style.display ="none"
        note1Ref.current.style.display ="none"
        note2Ref.current.style.display ="none"
        note3Ref.current.style.display ="none"
    }

   


    return (
        <div class="log">
            <h4>Instructional</h4>
          {log.instructional}
           <h4>technique</h4>
            {log.technique}

            <h4>Notes</h4>
            1: <input ref={note1Ref} class="notesIn" id="note1In"></input><div class="notesOut" id="note1Out">{log.note1}</div>
            2: <input ref={note2Ref} class="notesIn" id="note2In"></input><div class="notesOut" id="note2Out">{log.note2}</div>
            3: <input ref={note3Ref} class="notesIn" id="note3In"></input><div class="notesOut" id="note3Out">{log.note3}</div>

            <div ref={con} id="saveCancelCon">
            <button ref={save} onClick={saved} class="saveCancel">Save</button>
            <button ref={cancel} onClick={cancelled} class="saveCancel">cancel</button>
            </div>
            <button id="edit" onClick={edit} >Edit</button>

        </div>
    )
}
