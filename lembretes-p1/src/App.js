import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

export default class App extends React.Component {
  state = {
    lembretes: []
  };

  adicionarLembrete = (lembrete) => {
    this.setState((prevState) => ({
      lembretes: [...prevState.lembretes, lembrete]
    }));
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8">
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
            <LembreteLista lembretes={this.state.lembretes} />
          </div>
        </div>
      </div>
    );
  }
}
