import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AllDeck from './components/AllDeck';

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
    isSaveButtonDisabled: true, // ---> bool
    // onInputChange, //func
    // onSaveButtonClick, // func
    hasTrunfo: false, // bool
    deckCards: [],
  };

  checkIfHasTrunfo = () => {
    const { deckCards } = this.state;
    const xomps = deckCards.some((cardInfo) => cardInfo.cardTrunfo === true);
    if (xomps) this.setState({ hasTrunfo: true });
    else this.setState({ hasTrunfo: false });
  }

  // this.state vai pegar o state todo
  // Esta função que irá salvar a carta criada no deck.
  submitCardToDeck = (event) => {
    event.preventDefault();
    this.setState((previousState) => ({
      deckCards: [...previousState.deckCards, previousState],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), this.checkIfHasTrunfo);
  }

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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [target.name]: value }), this.checkIfSaveCanEnable);
  };
  // this.setState({ [target.name]: target.value }, () => {

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
      hasTrunfo,
      deckCards,
    } = this.state;

    return (
      <main>
        <section>
          <h1>Tryunfo</h1>
          <div>
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
              onSaveButtonClick={ this.submitCardToDeck }
              hasTrunfo={ hasTrunfo }
            />
          </div>

          <div>
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
        </section>

        <section>
          <AllDeck
            deckCards={ deckCards }
          />
        </section>
      </main>
    );
  }
}
//
export default App;
