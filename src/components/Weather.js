import React, { Component } from 'react'

export default class Weather extends Component {
  showResult = () => {
    const { name, weather, main } = this.props.result;

    if(!name || !weather || !main) return null;

    const iconURL = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
    const kelvin = 273.15;
    const alt = `clima de ${name}`

    return (
        <div className="row">
            <div className="resultado col s12 m6 offset-m3">
                <div className="card-panel light-blue ">
                    <span className="white-text">
                        <h2>Weather of: { name }</h2>
                        <p className="temperatura">
                            Current: { (main.temp - kelvin).toFixed(2) }&deg;C
                            <img src={iconURL} alt={alt}/>
                        </p>
                        <p>Max: { (main.temp_max - kelvin).toFixed(2) }&deg;C</p>
                        <p>Min: { (main.temp_min - kelvin).toFixed(2) }&deg;C</p>
                    </span>
                </div>
            </div>
        </div>
    )
  }
  render() {
    return (
      <div className="container">
        { this.showResult() }
      </div>
    )
  }
}
