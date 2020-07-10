import React from "react";
import Banner from "../Components/Banner";

export default function Error() {
  return (
    <div className="pageError">
      <Banner
        name="errorBanner"
        link="/"
        linkName="Вернуться на главную"
        heading="Error 404"
        par="Страничка не найдена"
      />
    </div>
  );
}
