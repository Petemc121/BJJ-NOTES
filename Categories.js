import React from 'react'
import Category from './Category';

export default function Categories({categories, handleDeleteCategory, editNote, addNote, techniques, handleDeleteTechnique}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category handleDeleteCategory={handleDeleteCategory} editNote={editNote} addNote={addNote} handleDeleteTechnique={handleDeleteTechnique} techniques={techniques} key={category.id} category={category} />;
            })}
        </div>
    )
}
