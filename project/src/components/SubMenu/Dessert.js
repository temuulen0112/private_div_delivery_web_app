import { useState, useEffect } from "react";
import Card from "../Card";
import { useFood } from "../../context/FoodContext";

function Desserts() {
  const [foods] = useFood();
  const [dessert, setDessert] = useState([]);
  useEffect(() => {
    setDessert(
      foods
        .filter((p) => {
          return p.category === "Амттан"
        })
    )
  }, [foods]);
  
  return (
    <div className="row">
      {dessert.map((data, index) => {
        return (
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
        );
      })}
    </div>
  );
}

export default Desserts;
