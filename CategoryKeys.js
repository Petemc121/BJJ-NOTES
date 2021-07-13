import React from 'react'
import CategoryKey from './CategoryKey.js'

export default function CateoryKeys({categoryKeys}) {
    return (
        <div id="categoryKeyContain">
            {categoryKeys.map(categoryKey => {
                return <CategoryKey categoryKey={categoryKey}/> 
            })}
        </div>
    )
}
