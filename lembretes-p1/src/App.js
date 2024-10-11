import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8">
            <h1 className="text-center">Hello, Lembretes!</h1>
          </div>
        </div>
      </div>
    );
  }
}

