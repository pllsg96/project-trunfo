import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (

      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            id="name-input"
            data-testid="name-input"
            placeholder="Nome da carta"
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
          />
        </label>
        <br />

        <label htmlFor="rare-input">
          Raridade da carta
          <select
            name="rate-input"
            id="rare-input"
            data-testid="rare-input"
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
          />
        </label>
        <br />

        <button
          type="submit"
          id="save"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
