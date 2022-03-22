import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card";
import { useFood } from "../../context/FoodContext";

const Salad = () => {
  const [foods] = useFood();
  const [salad, setSalad] = useState([]);
  useEffect(() => {
    setSalad(
      foods
        .filter((p) => {
          return p.category === "Салад ба зууш"
        })
    )
  }, [foods]);

  return (
    <div className="row">
      {salad.map((data, index) => (
        <div className="col-6 col-md-3">
          <Card
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
      ))}
    </div>
  );
};

export default Salad;
