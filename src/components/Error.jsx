import React from 'react'

export default function Error({msg}) {
    return (
        <div className="card-panel red darken-4 error col s12">
            {msg}
        </div>
    )
}
