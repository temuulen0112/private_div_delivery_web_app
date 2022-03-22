import React from "react";
import Cards from "../Card";
import { useEffect, useState } from "react";
import { useFood } from "../../context/FoodContext";

function Main() {
  const [foods] = useFood();
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    setMainMenu(
      foods
        .filter((p) => {
          return p.category === "Үндсэн хоол"
        })
    )
  }, [foods]);

  return (
    <div className="row">
      {mainMenu.map((data, index) => (
        <div className="col-6 col-md-3">
          <Cards
               key={data.index}
               name={data.name}
               price={data.price}
               portion={data.portion}
               stock={data.stock}
               image={data.image}
               discount={data.sales}
               percentage={data.discount_percentage}
               recipe={data.recipe}
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
