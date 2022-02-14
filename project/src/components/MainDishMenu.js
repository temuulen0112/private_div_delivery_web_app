import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { otherServices } from "../services/otherServices";
function MainDishMenu() {
  // const [foods] = useFood();
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    // setMainMenu
    // otherServices
      
  }, []);
  let menu = mainMenu.filter((m) => m.category === "Үндсэн хоол").slice(0, 4);
  return (
    <div className="row">
      {menu.map((data) => (
        <div className="col-6 col-md-3" id="category-card">
          <Cards
            name={data.name}
            price={data.price}
            portion={data.portion}
            stock={data.stock}
            recipe={data.recipe}
            image={data.thumb_img}
            category={data.category}
          />
        </div>
      ))}
    </div>
  );
}
export default MainDishMenu;
