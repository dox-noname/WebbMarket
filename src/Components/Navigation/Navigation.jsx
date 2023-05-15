import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Navigation.css";
import "./mobilenav.css";
import { Form } from "react-bootstrap";
import { CgMenu } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import {Cart} from '../../card/components/Cart'
import {CartProvider} from '../../card/context/cart'
import Apcart from "../../card/Apcart";
import SearchBar from "./SearchBar";




const MarketList = () => {
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className="market-list-container">
      <button className="cta--tiendas" onClick={toggleListVisibility}>
        Tiendas
      </button>
      {isListVisible && (
        <ul className="market-list">
          <li><a href="#">Mercado 1</a></li>
          <li><a href="#">Mercado 2</a></li>
          <li><a href="#">Mercado 3</a></li>
          {/* Agrega más elementos de la lista según tus necesidades */}
        </ul>
      )}
    </div>
  );
};





function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <nav className="mobile-nav">
          <div className="mobile-nav-header">
            <div className="container--logo">
              <h2 className="logo">WEBBMARKET</h2>
            </div>
            {isMenuOpen && (
              <div className="mobile-menu-close-icon" onClick={handleMenuClose}>
                <FaTimes />
              </div>
            )}
          </div>
          <div className="item--nav menu-icon" onClick={handleMenuClick}>
            <CgMenu />
          </div>
          <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <li className="link" onClick={handleLinkClick}>
              <button>lugares</button>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="" className="links">
                Todos los mercados
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="" className="links">
                Envios
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="" className="links">
                Ferias
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="" className="links">
                Vender en webbmarket
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a href="" className="links">
                Ayuda
              </a>
            </li>
          </ul>
          {isMenuOpen && (
            <div className="mobile-menu-overlay" onClick={handleMenuClose} />
          )}
        </nav>
      ) : (
        <header className="header">
          <nav className="nav--header--container-1">
            <div className="container--logo">
              <h2 className="logo">WEBBMARKET</h2>
            </div>

            <div className="item--nav container--tiendas">
              <MarketList/>
            </div>
            <SearchBar/>
            <div className="options-nav">
              <div className="item--nav container--deseos">
                <button className="deseos">Lista de deseos</button>
              </div>
              <div className="item--nav container--login">
                <button className="login--cuenta">Iniciar sesion </button>
              </div>
              <div className="item--nav container--carrito">
  
                  <Cart/>
                
              </div>
            </div>
          </nav>
          <nav className="nav--2">
            <ul className="options-menu">
              <li className="link">
                <button>lugares</button>
              </li>
              <li className="link">
                <a href="" className="links">
                  Todos los mercados
                </a>
              </li>
              <li className="link">
                <a href="" className="links">
                  Envios
                </a>
              </li>
              <li className="link">
                <a href="" className="links">
                  Ferias
                </a>
              </li>
              <li className="link">
                <a href="" className="links">
                  Vender en webbmarket
                </a>
              </li>
              <li className="link">
                <a href="" className="links">
                  Ayuda
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default Navigation;
