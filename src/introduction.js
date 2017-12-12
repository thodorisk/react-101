import React from 'react';
import PropTypes from 'prop-types';

const Headline = () =>
  (
    <h1 className="title">Welcome to the React world.</h1>
  );

const Greeting = (props) => {
  const { name, age } = props;
  return <p>Hello from { name }, { age }!</p>;
};

const App = () =>
  (
    <div>
      <Headline />
      <Greeting name="Thodoris" />
    </div>
  );

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

Greeting.defaultProps = {
  age: 32
};

export default App;
