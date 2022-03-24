import Card from "./Card";
import { useEffect, useState } from "react";
import "../css/card.css";
import { useFood } from "../context/FoodContext";

function Sales() {
  const [foods] = useFood();
  const [sales, setSales] = useState([]);
  useEffect(() => {
    setSales(
      foods
        .filter((p) => {
          return p.discount !== 0
        })
    )
  }, [foods]);

  return (
    <div className="row">
      {sales.map((data, index) => (
        <div className="col-6 col-md-3" id="category-card">
          <Card
            key={index}
            name={data.name}
            price={data.price}
            portion={data.portion}
            stock={data.stock}
            image={data.image}
            discount={data.sales}
            percentage={data.discount_percentage}
            finalPrice={data.final_price}
            recipe={data.recipe}
          />
        </div>
      ))}
    </div>
  );
}

export default Sales;
