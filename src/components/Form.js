import React, { Component } from 'react'

export default class Form extends Component {
    cityRef = React.createRef();
    countryRef = React.createRef();

    searchWeather = (e) => {
        e.preventDefault();

        // refs and data object
        const resp = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }

        // send it in props
        this.props.dataQuery(resp);
        
        // clear the form
    }

    render() {
        return (
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <form onSubmit={ this.searchWeather }>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <input id="city" type="text" ref={ this.cityRef }/>
                            <label htmlFor="city">City:</label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <select ref={ this.countryRef }>
                                <option defaultValue>Choose a country</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="ES">Spanish</option>
                                <option value="US">United States</option>
                                <option value="MX">México</option>
                                <option value="PE">Peru</option>
                            </select>
                            <label htmlFor="country"></label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-m2 buscador">
                            <input 
                                type="submit" 
                                className="waves-effect waves-light btn-large yellow accent-4"
                                value="Search"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
