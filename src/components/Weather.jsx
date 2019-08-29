import React from 'react'

export default function Weather({ weather }) {
    
    if (!weather.name) return null;
    const { main: { temp, temp_max, temp_min }, name } = weather;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather of { name } is:</h2>
                <p className="temperatura">
                    { parseInt(temp - 273.15, 10) }<span>&#x2103;</span>
                </p>
                <p>Maximum temperature: { parseInt(temp_max - 273.15, 10) }&#x2103;</p>
                <p>Minimum temperature: { parseInt(temp_min - 273.15, 10) }&#x2103;</p>
            </div>
        </div>
    )
}
