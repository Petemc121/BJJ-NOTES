import React from 'react'

export default function UpdateButton({display, onClick}) {
    return (
        <div>
            <button style={{display: display}} onClick={onClick} >Update</button>
        </div>
    )
}
