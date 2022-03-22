import { useState, useEffect } from "react";
import Cards from "./Card";
import { useFood } from "../context/FoodContext";

function Desserts() {
  const [foods] = useFood();
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    setDesserts(
      foods
        .filter((p) => {
          return p.category === "Амттан"
        })
        .slice(0, 4)
    )
  }, [foods]);

  // useEffect(() => {
  //   fetch("../data/foods.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFoods(data);
  //     });
  // }, []);

  // let desserts = foods.filter((p) => p.category === "Амттан").slice(0, 4);

  return (
    <div className="row">
      {desserts.map((data, index) => {
          <div className="col-6 col-md-3" id="category-card">
            <Cards
              key={index}
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
      })}
    </div>
  );
}

export default Desserts;
