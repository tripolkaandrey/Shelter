import React from "react";
import Banner from "../Components/Banner";
import Block from "../Components/Block";
import Data from "../data";

const components = Data.map(item => (
  <Block key={item.id} imgUrl={item.imgUrl} name={item.name} type="1"/>
));
export default function Ads() {
  return (
    <div className="pageAds">
      <Banner
        name="adsBanner"
        link="/Help"
        linkName="Помочь"
        heading="Помоги животным"
        par="Лучше маленькая помощь,чем большое сочувствие"
        id="10"
      />
      <div className="contentPlace">{components}</div>
    </div>
  );
}
