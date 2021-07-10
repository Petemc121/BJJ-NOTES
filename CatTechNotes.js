import React from 'react'
import CatTechNote from './CatTechNote'

export default function CatTechNotes({catTechnique, editCatTechNote}) {
    return (
        <div>
             {
            catTechnique.notes.map(catTechNote => {
                return <CatTechNote key={catTechNote.noteID} editCatTechNote={editCatTechNote} catTechnique={catTechnique} catTechNote={catTechNote}/>;
            })
            }
        </div>
    )
}
