// components/TestCategories/Cuc.jsx
import React from 'react';

function Cuc({ commands, onSelectCommand }) {
  return (
    <div>
      <label>
        Selecione o Comando:
        <select onChange={(e) => onSelectCommand(e.target.value)}>
          <option value="">Selecione um Comando</option>
          {commands.map((command, index) => (
            <option key={index} value={command.label}>
              {command.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Cuc;