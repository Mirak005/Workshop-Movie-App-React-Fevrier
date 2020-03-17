import React from "react";

function Rating(  { rate  , getRate = ()=> {}  }) {
  const stars = rate => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        starArray.push(
          <i
            className="fas fa-star star-gold"
            onClick={() => getRate(i)}
          ></i>
        );
      } else
        starArray.push(
          <i className="fas fa-star" onClick={() => getRate(i)}></i>
        );
    }

    return starArray;
  };

  return <div>{stars(rate)}</div>;
}

export default Rating;
