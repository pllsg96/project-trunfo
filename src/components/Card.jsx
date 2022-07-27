import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName, // ---------> string
      cardDescription, // --> string
      cardAttr1, // --------> string
      cardAttr2, // --------> string
      cardAttr3, // --------> string
      cardImage, // --------> string
      cardRare, // ---------> string
      cardTrunfo, // -------- > bool
    } = this.props; // Aqui estamos buscando as props de onde? Do App, suponho.
    return (
      <div className="card__box">
        <h2 data-testid="name-card">{ cardName }</h2>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <p data-testid="description-card">{ cardDescription }</p>

        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>

        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>

        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>

        <h3 data-testid="rare-card">{ cardRare }</h3>

        {cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3>}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,

};

export default Card;
