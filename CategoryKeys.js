import React from 'react'
import CategoryKey from './CategoryKey.js'

export default function CategoryKeys({categoryKeys}) {
    return (
        <div id="categoryKeyContain">
            <h1 style={{color:"white"}}>Category Shortcuts</h1>
            {categoryKeys.map(categoryKey => {
                return <CategoryKey key={categoryKey.id} categoryKey={categoryKey}/> 
            })}
        </div>
    )
}
