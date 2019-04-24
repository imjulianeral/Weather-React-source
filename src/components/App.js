import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
          title="Weather React App"
        />
        <Form/>
      </div>
    )
  }
}
