import React from 'react'
import CatTechNote from './CatTechNote'

export default function CatTechNotes({catTechnique, expanded,handleDeleteCatTechNote, editCatTechNote}) {
    return (
        <div>
             {
            catTechnique.notes.map(catTechNote => {
                return <CatTechNote key={catTechNote.noteID} handleDeleteCatTechNote={handleDeleteCatTechNote} expanded={expanded} editCatTechNote={editCatTechNote} catTechnique={catTechnique} catTechNote={catTechNote}/>;
            })
            }
        </div>
    )
}
