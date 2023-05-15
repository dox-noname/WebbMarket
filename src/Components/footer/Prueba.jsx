import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options1 = [
    { value: 'option11', label: 'Opción 1.1' },
    { value: 'option12', label: 'Opción 1.2' },
    { value: 'option13', label: 'Opción 1.3' },
  ];

  const options2 = [
    { value: 'option21', label: 'Opción 2.1' },
    { value: 'option22', label: 'Opción 2.2' },
    { value: 'option23', label: 'Opción 2.3' },
  ];

  const options3 = [
    { value: 'option31', label: 'Opción 3.1' },
    { value: 'option32', label: 'Opción 3.2' },
    { value: 'option33', label: 'Opción 3.3' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Menú desplegable con opciones</h2>
      <div>
        <h3>Elemento 1</h3>
        <Dropdown
          options={options1}
          value={selectedOption}
          onChange={handleSelect}
          placeholder="Seleccionar opción"
        />
      </div>
      <div>
        <h3>Elemento 2</h3>
        <Dropdown
          options={options2}
          value={selectedOption}
          onChange={handleSelect}
          placeholder="Seleccionar opción"
        />
      </div>
      <div>
        <h3>Elemento 3</h3>
        <Dropdown
          options={options3}
          value={selectedOption}
          onChange={handleSelect}
          placeholder="Seleccionar opción"
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
