import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'sugar', 'coffee']
    };
  }
  render() {
    const { buyItems } = this.state;
    return (
      <div>
        <h1>Shopping List</h1>
        {
          buyItems.map(item =>
            (
              <p key={item}>{item}</p>
            ))
      }
      </div>
    );
  }
}

export default App;
