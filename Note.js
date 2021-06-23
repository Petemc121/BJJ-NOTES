import React, {useState, useRef} from 'react'

export default function Note({note}) {
   const [edit, setEdit] = useState("Your note will appear here.")
   const [editing, setEditing] = useState(false);
   const noteRef = useRef();
   let editDisplay = "display-block"
   let updateDisplay = "display-none"
        
    
 const updateNote = () => {
   let editValue = noteRef.current.value;
       setEdit(editValue);
       toggleButtonDisplay()
       setEditing(true)
       editValue = null;
    }

    const editNote = () =>
    {
        
        toggleButtonDisplay();
        setEditing(false);
        console.log(updateDisplay)
        console.log(editDisplay)
    }

    

const toggleButtonDisplay = () => {
   if(editing === false) 
   {
   updateDisplay = 'display-block';
   editDisplay = "display-none" 
   }else
   {
    editDisplay = "display-none"
    updateDisplay = 'display-block';

   }
  
}



    return (
        <div>
            <h4>Note {note.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} type="text" placeholder="Add your note here"></input>
            <div>{edit}</div>
            
            <button className={updateDisplay} onClick={updateNote}>Update</button>
            <button className={editDisplay} onClick={editNote}>Edit</button>
            </div>
        </div>
    )
}
