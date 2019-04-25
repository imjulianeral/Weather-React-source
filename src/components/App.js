import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';
import Error from './Error';
import Weather from './Weather';

export default class App extends Component {

  state = {
    error: false,
    query: {},
    resp: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.reqAPI();
    }
  }

  reqAPI = () => {
    const { city, country } = this.state.query;

    if(!city || !country) return null;

    const APIKey = 'e04e8cdb238c4678ebcb63220ecb986d';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`;

    fetch(url)
      .then(resp => { return resp.json() })
      .then(data => {
        this.setState({
          resp: data
        })
      })
      .catch(err => console.error(err));
  }
  
  dataQuery = (resp) => {
    if (resp.city === '' || resp.country === '') {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false,
        query: resp
      });
    }
  }

  render() {

    let result;
    if (this.state.error) {
      result = <Error msg="Both fields are required"/>
    } else {
      result = <Weather result={ this.state.resp }/>
    }

    return (
      <div className="app">
        <Header
          title="Weather React App"
        />
        <Form
          dataQuery={ this.dataQuery }
        />
        { result }
      </div>
    )
  }
}
