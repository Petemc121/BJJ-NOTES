import React from 'react'
import Category from './Category';

export default function Categories({categories, logs, handleDeleteLog}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category handleDeleteLog={handleDeleteLog} logs={logs} key={category.id} category={category} />;
            })}
        </div>
    )
}
