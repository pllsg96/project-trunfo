import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (

      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            id="name-input"
            data-testid="name-input"
            placeholder="Nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="description-input">
          Descrição
          <input
            type="textarea"
            id="description-input"
            data-testid="description-input"
            placeholder="Descrição da carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            id="attr1-input"
            data-testid="attr1-input"
            placeholder="Primeiro atributo"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            id="attr2-input"
            data-testid="attr2-input"
            placeholder="Segundo atributo"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            id="attr3-input"
            data-testid="attr3-input"
            placeholder="Terceiro atributo"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            id="image-input"
            data-testid="image-input"
            placeholder="URL da imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="rare-input">
          Raridade da carta
          <select
            name="rate-input"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <br />

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            id="trunfo-input"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <button
          type="submit"
          id="save-button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.number.isRequired,
  cardTrunfo: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,

};

export default Form;
