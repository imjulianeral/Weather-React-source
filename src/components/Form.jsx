import React, { useState } from 'react';

export default function Form({ dataQuery }) {

    const [search, saveSearch] = useState({
        city: '',
        country: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        saveSearch({
            ...search,
            [name]: value
        });
    }

    const requestWeather = e => {
        e.preventDefault();

        dataQuery(search);
    }

    return (
        <form onSubmit={ requestWeather }>
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="city" 
                    id="city"
                    onChange={ handleChange }
                />
                <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s12">
                <select name="country" onChange={ handleChange }>
                    <option defaultValue>Choose a Country:</option>
                    <option value="US">United States</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Get Weather"
                />
            </div>
        </form>
    )
}
