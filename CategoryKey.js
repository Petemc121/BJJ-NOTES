import React from 'react'

export default function categoryKey({categoryKey}) {



    return (
        <div class="categoryKeys" style={{backgroundColor:categoryKey.color}}>
            <h1>{categoryKey.category}</h1>
        </div>
    )
}
