import React, { useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Context } from "../store/appContext";
import logo from "../../img/logo2_style.png";
import "../../styles/navbar.css";
import { Dropdown, Icon } from "semantic-ui-react";


export const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('logout function started');
    actions.logout();
    console.log('logout function executed');
    sessionStorage.removeItem('currentUser');
    console.log('sessionStorage removed');
    navigate("/login");
    };

  // chequear la lógica detras de esto: si estamos logueados y nos vamos a register o login, no tenemos como volver al resto del sitio
  // if (location.pathname === "/" || location.pathname === "/register") {
  //   return null;
  // } else {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          class="navbar-toggler"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navContent d-flex collapse navbar-collapse ${
            isOpen ? "show" : ""
          }`}
        >
          <div className="mx-2">
            <Link to="/login" className="link text-light">
              Login
            </Link>
          </div>
          <div className="mx-2">
            <Link to="/register" className="link text-light">
              Register
            </Link>
          </div>
          <div className="mx-2">
            <Link to="/perfil" className="link text-light">
              Perfil
            </Link>
          </div>
          <div className="mx-2">
            <Link to="/crearevento" className="link text-light">Crear Evento
            </Link>
                      </div>

                   <div className="">
            <Dropdown
              text="Account"
              className="text-light"
              pointing="top right"
              open={open}
              onClick={handleClick}
            >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/perfil" text="Perfil" description={<Icon name="user" />} />
                <Dropdown.Item as={Link} to="/mievento" text="Mis Eventos" description={<Icon name="calendar alternate" />} />
                <Dropdown.Divider />
                <Dropdown.Item text="Logout" onClick={handleSubmit} description={<Icon name="sign out" />} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        
        </div>
      </div>
   

    </nav>
  );
};
