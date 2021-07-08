import React from 'react'
import Category from './Category';

export default function Categories({categories, techniques, handleDeleteTechnique}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category handleDeleteTechnique={handleDeleteTechnique} techniques={techniques} key={category.id} category={category} />;
            })}
        </div>
    )
}
