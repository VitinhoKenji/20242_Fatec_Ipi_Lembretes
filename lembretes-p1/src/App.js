import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

export default class App extends React.Component {
  state = {
    lembretes: []
  };


  adicionarLembrete = (lembrete) => {
    const lembretes = this.state.lembretes
    this.setState({
      lembretes: [...lembretes, lembrete]
    })
  }

  render() {
    return (
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <h1 className="text-center mb-4">Lista de Lembretes</h1>
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
            <LembreteLista lembretes={this.state.lembretes} />
          </div>
        </div>
      </div>
    );
  }
}