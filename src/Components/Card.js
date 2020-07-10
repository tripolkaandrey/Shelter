import React, { Component } from "react";

export default class Card extends Component {
  state = {
    isModalOpen: false
  };
  render() {
    return (
      <React.Fragment>
        <button
          className="btn-primary FillForm-button"
          onClick={() => this.setState({ isModalOpen: true })}
        >
          Оплатить
        </button>
        {this.state.isModalOpen && (
          <div id="Card">
            <div className="modal">
              <div className="modal-body">
                <form
                  encType="application/x-www-form-urlencoded"
                  name="Card"
                >
                  <input type="text" name="CardNumber" placeholder="Card number" autoFocus />
                  <input type="text" placeholder="Name on the card" />
                  <input type="text" placeholder="MM/YY" />
                  <input type="text" placeholder="CVC" />
                  <br />
                  <button
                    type="sumbit"
                    /*onClick={() => this.setState({ isModalOpen: false })}*/
                    className="btn-primary FillFormButton"
                  >
                    Оплатить
                  </button>
                  <button
                    className="btn-primary FillFormButton"
                    onClick={() => this.setState({ isModalOpen: false })}
                  >
                    Закрыть
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
