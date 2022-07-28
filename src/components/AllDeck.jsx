import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllDeck extends Component {
  render() {
    const { deckCards } = this.props;
    const x = deckCards.map(({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    }) => (
      <Card
        key={ cardName }
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
      />
    ));

    return (
      <div>
        {x}
      </div>
    );
  }
}

AllDeck.propTypes = {
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllDeck;
