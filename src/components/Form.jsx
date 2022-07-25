import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" data-testid="name-input" />
        <br />

        <input type="textarea" data-testid="description-input" />
        <br />

        <input type="number" data-testid="attr1-input" />
        <br />

        <input type="number" data-testid="attr2-input" />
        <br />

        <input type="number" data-testid="attr3-input" />
        <br />

        <input type="text" data-testid="image-input" />
        <br />

        <select
          name="rate-input"
          id="rare-input"
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muitoraro">Muito raro</option>

        </select>
        <br />

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
