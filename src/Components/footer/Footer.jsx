import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./footer.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import MyAccordion from "./Acordion";

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const data = [
    {
      title: "Compra con seguridad",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil reprehenderit corrupti sequi et architecto soluta quam excepturi aliquam laboriosam, nesciunt molestiae tenetur distinctio ipsa? Est officiis consequatur praesentium. Facilis, qui.",
    },
    {
      title: "Section 2",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil reprehenderit corrupti sequi et architecto soluta quam excepturi aliquam laboriosam, nesciunt molestiae tenetur distinctio ipsa? Est officiis consequatur praesentium. Facilis, qui.",
    },
    {
      title: "Section 3",
      content:
        "Content for Section 3Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil reprehenderit coadipisicing elit. Nihil reprehenderit co",
    },
  ];
  const info = [
    {
      title: "Paragraph 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Link 1",
      content: <a href="/link1">Link 1 content</a>,
    },
    {
      title: "Paragraph 2",
      content: "Suspendisse interdum felis at neque malesuada vulputate.",
    },
    {
      title: "Link 2",
      content: <a href="/link2">Link 2 content</a>,
    },
  ];

  const style1 = {
    fontSize: "1.9rem",
    color: "white",
    backgroundColor: "#053b6d",
  };
  return (
    <>
      {isMobile ? (
        <>
          <footer>
            <section className="section--subscripcion">
              <form action="" className="form-suscripcion">
                <h3>
                  ¿ Deseas recibir notificaciones de nuestras ofertas y
                  productos ?
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
              <div className="w-100"></div>
              <MyAccordion
                data={data}
                handleClick={handleClick}
                btncolor={style1}
              />
            </section>
            <section className="info--footer">
              <div className="container--info--footer">
                <div className="item--info--foter redes">
                  <h2 className="title-red">Siguenos en :</h2>
                  <div className="container--img--redes"></div>
                </div>
                {/* <MyAccordion
                  data={infoFT}
                  handleClick={handleClick}
                  btncolor={style1}
                /> */}
                <div className=" item--info--foter asosiacion">
                  <h2 className="title--info colabora">
                    Colabora con nosotros
                  </h2>
                  <a href="">Asociasiones</a>
                  <div className="item--info--foter info-util">
                    <h2 className="title--info">Informacion util</h2>
                    <a href="">¿ Ques es Webbmarket ?</a>
                    <a href="">Blog</a>
                    <a href="">Politica de devolucion de productos</a>
                  </div>
                </div>
                <div className="item--info--foter contacto">
                  <h2 className="title--info">Contacto</h2>
                  <p>Atención telefónica: (+593) 992670765</p>
                  <p>
                    De Lunes a Sábados en el horario de 08:00hs a 18:00hs y
                    Domingos de 08:00hs a 14:00hs
                  </p>
                </div>

                <div className="item--info--foter Categorias">
                  <h2 className="title--info">Categorias</h2>
                  <a href="">Lo mas buscado</a>
                  <a href="">Promociones</a>
                  <a href="">Recomendaciones</a>
                  <a href="">Ofertas</a>
                </div>
              </div>
            </section>
          </footer>
        </>
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
              <h2 className="title--item--section">Pensado para ti</h2>
              <p className="paragrap--section">
                Comprar con seguridad es esencial para garantizar la protección
                de tus datos personales y financieros. Al realizar compras en
                línea, asegúrate de utilizar sitios web y plataformas confiables
                y seguras.
              </p>
            </div>

            <div className="item-section item-article-1">
              <h2 className="title--item--section">Compra con seguridad</h2>
              <p className="paragrap--section">
                Este producto ha sido cuidadosamente diseñado pensando en ti.
                Cada característica y detalle ha sido creado para satisfacer tus
                necesidades y brindarte la mejor experiencia posible. Desde su
                diseño ergonómico hasta su funcionalidad intuitiva,
              </p>
            </div>
            <div className="item-section item-article-1">
              <h2 className="title--item--section"> ¿ Por que comprar en webb ?</h2>
              <p className="paragrap--section">
                En nuestra web, encontrarás una experiencia de compra única y
                satisfactoria. Nos esforzamos por ofrecer productos de alta
                calidad y un servicio excepcional a nuestros clientes. Al elegir
                comprar en nuestra web, te beneficiarás de varias ventajas
              </p>
            </div>
          </section>
          <section className="info--footer">
              <div className="container--info--footer">
                <div className="item--info--foter redes">
                  <h2 className="title-red">Siguenos en :</h2>
                  <div className="container--img--redes"></div>
                </div>
                {/* <MyAccordion
                  data={infoFT}
                  handleClick={handleClick}
                  btncolor={style1}
                /> */}
                <div className=" item--info--foter asosiacion">
                  <h2 className="title--info colabora">
                    Colabora con nosotros
                  </h2>
                  <a href="">Asociasiones</a>
                  <div className="item--info--foter info-util">
                    <h2 className="title--info">Informacion util</h2>
                    <a href="">¿ Ques es Webbmarket ?</a>
                    <a href="">Blog</a>
                    <a href="">Politica de devolucion de productos</a>
                  </div>
                </div>
                <div className="item--info--foter contacto">
                  <h2 className="title--info">Contacto</h2>
                  <p>Atención telefónica: (+593) 992670765</p>
                  <p>
                    De Lunes a Sábados en el horario de 08:00hs a 18:00hs y
                    Domingos de 08:00hs a 14:00hs
                  </p>
                </div>

                <div className="item--info--foter Categorias">
                  <h2 className="title--info">Categorias</h2>
                  <a href="">Lo mas buscado</a>
                  <a href="">Promociones</a>
                  <a href="">Recomendaciones</a>
                  <a href="">Ofertas</a>
                </div>
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
