import React from 'react';
import { Component } from 'react';

export default class LembreteEntrada extends Component {
  state = {
    novoLembrete: ''
  };

  onInputChange = (evento) => {
    this.setState({ novoLembrete: evento.target.value });
  };

  onFormSubmit = (evento) => {
    evento.preventDefault();
    if (this.state.novoLembrete) {
      this.props.adicionarLembrete(this.state.novoLembrete);
      this.setState({ novoLembrete: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="mb-4">
        <div className="input-group shadow-sm">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Digite um lembrete..."
            value={this.state.novoLembrete}
            onChange={this.onInputChange}
          />
          <button className="btn btn-primary btn-lg" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    );
  }
}

