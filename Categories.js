import React from 'react'
import Category from './Category';

export default function Categories({categories, logs}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category logs={logs} key={category.id} category={category} />;
            })}
        </div>
    )
}
