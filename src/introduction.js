import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'sugar', 'coffee']
    };
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.newItem.value; // the value of the input

    this.setState({
      buyItems: [...this.state.buyItems, newItem] // old items (spread operator), new item
    });

    this.addForm.reset();
  }
  render() {
    const { buyItems } = this.state;
    return (
      <div>
        <header>
          <h1>Shopping List</h1>
          {/* empty div */}
          <form
            className="form-inline"
            ref={(input) => { this.addForm = input; }}
            onSubmit={(e) => { this.addItem(e); }}
          >
            <div className="form-group">
              <label htmlFor="newItemIn">Add New Item
                <input
                  ref={(input) => { this.newItem = input; }}
                  type="text"
                  placeholder="Bread"
                  className="form-control"
                  id="newItemIn"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </header>
        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // Loop in order to add a table row each time.
                buyItems.map(item =>
                  (
                    <tr key={item}>
                      <th scope="row">1</th>
                      <td>{item}</td>
                      <td>Button</td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
