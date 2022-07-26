import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  state = {
    cardName: '', // ---------> string
    cardDescription: '', // --> string
    cardAttr1: '', // --------> string
    cardAttr2: '', // --------> string
    cardAttr3: '', // --------> string
    cardImage: '', // --------> string
    cardRare: '', // ---------> string
    cardTrunfo: false, // ------> bool
    // isSaveButtonDisabled: false, //bool
    // onInputChange, //func
    // onSaveButtonClick, // func
    // hasTrunfo: true, // bool

  };

  handleInput = ({ target }) => {
    console.log(target.value);
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      cardName, // ---------> string
      cardDescription, // --> string
      cardAttr1, // --------> string
      cardAttr2, // --------> string
      cardAttr3, // --------> string
      cardImage, // --------> string
      cardRare, // ---------> string
      cardTrunfo, // ---------> bool
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleInput }
          // isSaveButtonDisabled={ isSaveButtonDisabled }
          // onInputChange={ onInputChange }
          // onSaveButtonClick={ onSaveButtonClick }
          // hasTrunfo={ hasTrunfo }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}
//
export default App;
