import React from 'react'

export default function Log({log}) {



    function edit() {
       const saveCancel = document.getElementsByClassName('saveCancel')
       const saveCancelCon = document.getElementById('saveCancelCon')
       const edit = document.getElementById('edit')
       const inputs = document.getElementsByClassName('notesIn')
       const outputs = document.getElementsByClassName('notesOut')
       saveCancelCon.style.display = 'flex'
       edit.style.display = 'none'
        for (let i = 0; i < saveCancel.length; i++)
        {
            saveCancel[i].style.display = "block";
        }

        for (let i = 0; i < inputs.length; i++)
        {
            inputs[i].style.display = "block";
            outputs[i].style.display = "none";
        }
    }

    return (
        <div class="log">
            <h4>Instructional</h4>
          {log.instructional}
           <h4>technique</h4>
            {log.technique}

            <h4>Notes</h4>
            1: <input class="notesIn" id="note1In"></input><div class="notesOut" id="note1Out">Place your notes here.</div>
            2: <input class="notesIn" id="note2In"></input><div class="notesOut" id="note2Out">Place your notes here.</div>
            3: <input class="notesIn" id="note3In"></input><div class="notesOut" id="note3Out">Place your notes here.</div>

            <div id="saveCancelCon">
            <button class={log.id}>Save</button>
            <button class="saveCancel">cancel</button>
            </div>
            <button id="edit" onClick={edit}>Edit</button>

        </div>
    )
}
