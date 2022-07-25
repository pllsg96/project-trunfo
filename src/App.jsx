import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  render() {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: true,
      isSaveButtonDisabled: false,
      onInputChange,
      onSaveButtonClick,
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}
//
export default App;
