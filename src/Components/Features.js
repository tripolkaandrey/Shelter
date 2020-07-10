import React, { Component } from "react";
import { FiActivity, FiGithub, FiFileText } from "react-icons/fi";
import Title from "./Title";

export default class Features extends Component {
  state = {
    features: [
      {
        icon: <FiActivity />,
        title: "Помощь",
        info: "Оказываем необходимую медицинскую помощь бездомным животным",
        key: "1"
      },
      {
        icon: <FiGithub />,
        title: "Опека",
        info: "Даем возможность приютить или же установить опеку над животным прию",
        key: "2"
      },
      {
        icon: <FiFileText />,
        title: "Страховка",
        info: "Оформляем страховку на животное",
        key: "3"
      }
    ]
  };
  render() {
    return (
      <section className="features">
        <Title title="Особенности" />
        <div className="features-center">
          {this.state.features.map((feature,key) => {
            return (
              <article key = {key} className="feature">
                <span>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
