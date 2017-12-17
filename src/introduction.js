import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'sugar', 'coffee'],
      message: ''
    };
  }

  addItem(e) {
    e.preventDefault();
    const { buyItems } = this.state;
    const newItem = this.newItem.value; // the value of the input
    const alreadyOnTheList = buyItems.includes(newItem);

    if ((newItem !== '') && (!alreadyOnTheList)) {
      this.setState({
        buyItems: [...this.state.buyItems, newItem], // old items (spread operator), new item
        message: ''
      });
    } else if (alreadyOnTheList) {
      this.setState({
        message: 'This item is already on the list.'
      });
    }
    this.addForm.reset();
  }

  removeItem(item) {
    /* Getting the old state and filtering each item from the original state and
    comparing the wantRemove item with the old "buyItem" to kick out the one we want.
    */
    const newBuyItems = this.state.buyItems.filter(buyItem =>
      (
        buyItem !== item
      ));
    this.setState({
      buyItems: [...newBuyItems]
    });

    if (newBuyItems.length === 0) {
      this.setState({
        message: 'No items in your shopping list, add some!!'
      });
    }
  }

  clearList() {
    this.setState({
      buyItems: [],
      message: 'No items in your shopping list, add some!!'
    });
  }

  render() {
    const { buyItems, message } = this.state;
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
          {
              (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
          }

          {
            buyItems.length > 0 &&
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
                        <td>
                          <button
                            onClick={() => { this.removeItem(item); }}
                            type="button"
                            className="btn btn-danger"
                          >Remove
                          </button>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">&nbsp;</td>
                  <td className="text-right">
                    <button
                      onClick={() => { this.clearList(); }}
                      type="button"
                      className="btn btn-warning"
                    >Clear List
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          }
        </div>
      </div>
    );
  }
}

export default App;
