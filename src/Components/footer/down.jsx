import React, { useState } from 'react';
import './down.css'
export function Dropdown({ title, options, pushDown, isOpen, setIsOpen }) {
  function handleClick() {
    if (pushDown && !isOpen) {
      pushDown();
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleClick}>{title}</button>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div className="dropdown-option" key={index}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export function AppDown() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function pushDown2() {
    setIsOpen1(false);
  }

  function pushDown3() {
    setIsOpen1(false);
    setIsOpen2(false);
  }

  function pushDown4() {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  }

  return (
    <div className="dropdowns">
      <Dropdown
        title="Dropdown 1"
        options={['Option 1', 'Option 2', 'Option 3']}
        pushDown={() => setIsOpen2(false)}
        isOpen={isOpen1}
        setIsOpen={setIsOpen1}
      />
      <Dropdown
        title="Dropdown 2"
        options={['Option 4', 'Option 5', 'Option 6']}
        pushDown={pushDown3}
        isOpen={isOpen2}
        setIsOpen={setIsOpen2}
      />
      <Dropdown
        title="Dropdown 3"
        options={['Option 7', 'Option 8', 'Option 9']}
        pushDown={pushDown4}
        isOpen={isOpen3}
        setIsOpen={setIsOpen3}
      />
            <Dropdown
        title="Dropdown 3"
        options={['Option 7', 'Option 8', 'Option 9']}
        pushDown={pushDown4}
        isOpen={isOpen3}
        setIsOpen={setIsOpen3}
      />
    </div>
  );
}
