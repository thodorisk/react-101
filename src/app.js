import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

const App = () =>
  (
    <div>
      <h1 className="title">Hello from React!</h1>
      <p>Rendering paragraph text with JSX</p>
    </div>
  );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
