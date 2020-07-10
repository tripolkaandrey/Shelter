import React from "react";
import FillForm from "./FillForm";
import Card from "./Card";

export default function Block(props) {
  return (
    <article className="block" id = {props.id}>
      <div className="img-container">
        <img src={props.imgUrl} alt={props.name} />
        {props.type === "1" && <FillForm />}
        {props.type === "2" && <Card />}
      </div>
      <p className="block-info">{props.name}</p>
    </article>
  );
}
