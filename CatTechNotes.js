import React from 'react'

export default function CatTechNotes(catTechnique, editCatTechNote) {
    return (
        <div>
             {
            catTechnique.notes.map(catTechNote => {
                return <CatTechNote key={note.noteID} editCatTechNote={editCatTechNote} catTechnique={catTechnique} catNote={catTechNote}/>;
            })
            }
        </div>
    )
}
