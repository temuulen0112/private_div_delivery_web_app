import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import "../css/menu.css";
import "../css/App.css";
import OffCanvas from "./Canvas";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import MenuInfo from "./NavbarMenuInfo";
import { useUser } from "../context/UserContext";

function MenuComponent() {
  const [user, setUser] = useUser();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const data = JSON.parse(localStorage.getItem("userInfo"));
      setUser({
        userName: data.name,
        email: data.email,
        address: data.address,
        id: data._id,
      });
    }
  }, []);

  const handleSelect = (j) => {
    if (j === "/") {
      setUser(null);
      localStorage.clear();
    }
  };
  return (
    <Navbar expand="lg">
      <Container>
        <MenuInfo />
        <div className="searchAndBusket order-1 d-lg-none">
          <SearchBar />
          <OffCanvas />
        </div>
        <Navbar.Brand as={NavLink} to="/" className="ps-4 ps-md-5 ps-lg-0">
          <div className="logo order-0">
            <img src="/icons/food.svg" alt="" width={30} height={35} />
            <div className="food">Food Delivery</div>
          </div>
        </Navbar.Brand>
        <Navbar id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <div className="tses">
              <NavLink className="ts nav-link" exact to="/">
                НҮҮР
              </NavLink>
              <NavLink className="ts nav-link" to="/menu">
                ХООЛНЫ ЦЭС
              </NavLink>
              <NavLink className="ts nav-link" to="/area">
                ХҮРГЭЛТИЙН БҮС
              </NavLink>
            </div>
            <div id="p"></div>
          </Nav>
          <div className="loginBusket">
            <SearchBar />
            <OffCanvas />
            <div className="login">
              {user ? (
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {user.userName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="/">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <NavLink to="/login">
                  <img
                    src="/icons/usermenu.svg"
                    alt=""
                    width={20}
                    height={25}
                  />
                  <Button
                    variant="outline-none"
                    className="signin text-orange fw-500"
                  >
                    Нэвтрэх
                  </Button>
                </NavLink>
              )}
            </div>
          </div>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default MenuComponent;
