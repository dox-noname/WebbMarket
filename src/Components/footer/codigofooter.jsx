import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Footer.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function MyAccordion({ data, handleClick }) {
  return (
    <Accordion allowZeroExpanded>
      {data.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemButton onClick={() => handleClick(index)}>
            {item.title}
          </AccordionItemButton>
          <AccordionItemPanel>
            <p>{item.content}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const data = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
  ];

  return (
    <>
      {isMobile ? (
        <section className="section-articles">
          <div className="item-section item-article-1">
            <MyAccordion data={data} handleClick={handleClick} />
            <h2>asdsaasdasasdasasdasdasdas</h2>

            <h1>s</h1>
          </div>
        </section>
      ) : (
        <footer className="footer">
          <section className="section--subscripcion">
            <form action="" className="form-suscripcion">
              <h3>
                ¿ Deseas recibir notificaciones de nuestras ofertas y productos
                ?
              </h3>
              <div className="container--controls">
                <input
                  type="email"
                  className="input-email-sub"
                  placeholder="¡ ingresa tu email !"
                />
                <button className="input--sub--btn">Enviar</button>
              </div>
            </form>
          </section>
          <section className="section-articles">
            <div className="item-section item-article-1">
              <h2 className="title--item--section">Compra con seguridad</h2>
              <p className="paragrap--section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              </p>
            </div>

            <div className="item-section item-article-1">
              <h2 className="title--item--section">Compra con seguridad</h2>
              <p className="paragrap--section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              </p>
            </div>
          </section>
          <h3>
            © 2022 - WebMarket - Todos los derechos reservados - Todas las
            marcas son propiedad de sus respectivos dueños
          </h3>
        </footer>
      )}
    </>
  );
}

export default Footer;
