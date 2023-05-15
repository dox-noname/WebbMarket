import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const data = [
  {
    title: "Section 1",
    content: "Content for Section 1",
    url: "https://www.youtube.com/watch?v=Jli-cviuC2c",
  },
  {
    title: "Section 2",
    content: "Content for Section 2",
    url: "https://www.youtube.com/watch?v=Jli-cviuC2c",
  },
  {
    title: "Section 3",
    content: "Content for Section 3",
    url: "https://www.youtube.com/watch?v=Jli-cviuC2c",
  },
];
const btnstyle = {
  color: "red",
};
function MyAccordion({ data, handleClick, btncolor, url, name }) {
  return (
    <Accordion allowZeroExpanded className="w-100 pb-4">
      {data.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemButton
            style={btncolor}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </AccordionItemButton>
          <AccordionItemPanel>
            {typeof item.content === "string" ? (
              <p className="article--descripcion">{item.content}</p>
            ) : (
              item.content
            )}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default MyAccordion;



