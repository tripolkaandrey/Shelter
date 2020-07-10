import React, { Component } from "react";

export default class FillForm extends Component {
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
          Оставить заявку
        </button>
        {this.state.isModalOpen && (
          <div id="FillForm">
            <div className="modal">
              <div className="modal-body">
                <form
                  encType="application/x-www-form-urlencoded"
                  >
                  <input
                    name="Name"
                    type="text"
                    placeholder="ФИО"
                    autoFocus
                    required
                  />
                  <input name="email" type="email" placeholder="Email" />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Номер телефона"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                  <input
                    name="age"
                    type="number"
                    placeholder="Возраст"
                    min="16"
                  />
                  Sex:{" "}
                  <select name="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <br />
                  <button
                    className="btn-primary FillFormButton"
                    type="submit"
                    /*onClick={() => this.setState({ isModalOpen: false })}*/
                  >
                    Отправить
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
