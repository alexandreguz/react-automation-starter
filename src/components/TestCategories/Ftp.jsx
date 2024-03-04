// components/TestCategories/Ftp.jsx
import React from 'react';

function Ftp({ commands, onSelectCommand }) {
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

export default Ftp;
