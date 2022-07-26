import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  state = {
    cardName: '', // -----------------> string
    cardDescription: '', // ----------> string
    cardAttr1: '', // ----------------> string
    cardAttr2: '', // ----------------> string
    cardAttr3: '', // ----------------> string
    cardImage: '', // ----------------> string
    cardRare: '', // -----------------> string
    cardTrunfo: false, // ------------> bool
    isSaveButtonDisabled: true, // --> bool
    // onInputChange, //func
    // onSaveButtonClick, // func
    // hasTrunfo: true, // bool
  };

  checkIfSaveCanEnable = () => {
    const {
      cardName, // -----------------> string
      cardDescription, // ----------> string
      cardAttr1, // ----------------> string
      cardAttr2, // ----------------> string
      cardAttr3, // ----------------> string
      cardImage, // ----------------> string
      cardRare, // -----------------> string
    } = this.state;

    const minVal = 0;
    const maxVal = 90;
    const maxSumVal = 210;
    const cAt1 = parseInt(cardAttr1, 10);
    const cAt2 = parseInt(cardAttr2, 10);
    const cAt3 = parseInt(cardAttr3, 10);
    if (
      !cardName
      || !cardDescription
      || !cardAttr1
      || ((cAt1 < minVal) || (cAt1 > maxVal))
      || !cardAttr2
      || ((cAt2 < minVal) || (cAt2 > maxVal))
      || !cardAttr3
      || ((cAt3 < minVal) || (cAt3 > maxVal))
      || ((cAt1 + cAt2 + cAt3) > maxSumVal)
      || !cardImage
      || !cardRare
    ) { this.setState({ isSaveButtonDisabled: true }); } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.checkIfSaveCanEnable();
    });
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
      isSaveButtonDisabled,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
