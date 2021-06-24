import React from 'react'

export default function EditButton({display, onClick}) {
    return (
        <div>
            <button style={{display: display}} onClick={onClick} >Edit</button>
        </div>
    )
}
