import React from "react";
import Banner from "../Components/Banner";
import img1 from "../images/Volunteer.svg"
import img2 from "../images/Money.svg"

import Block from "../Components/Block"

export default function Help() {
  return (
    <div className="pageHelp">
      <Banner
        name="helpBanner"
        link="/"
        linkName="Вернуться на главную"
        heading="Спасибо"
        par="Каждый из нас может помочь друзьям нашим меньшим"
      />
      <h2>Спасибо за ознакомление с нашим проектом</h2>
      <br />
      <p>
        Вы можете помочь животным не только приютив их,но также обеспечив их
        всем необходимой заботой или вещами
      </p>
      <br />
      <p>
        Ваш взнос имеет огромное значение для продолжения работы по улучшению жизни животных в тех районах, где понятия “благополучие животных” практически не существует. 
        Только благодаря поддержке таких неравнодушных людей, как Вы, мы сможем добиться серьезных перемен в культуре отношения к животным!
      </p>
      <br />
      <div className="helpWays">
        <Block id = "1" imgUrl={img1} name="Быть Волонтером" type="1"/>
        <Block id = "2" imgUrl={img2} name="Пожертвовать" type="2"/>
      </div>
      <div className="Help"></div>
    </div>
  );
}

