import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
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

export default Card;
