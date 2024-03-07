import React, { useState } from 'react';

function Ftp({ commands, onSelectCommand, runCommand }) {
  const [selectedCommand, setSelectedCommand] = useState('');

  return (
    <div>
      <label>
        Selecione o Comando:
        <select onChange={(e) => setSelectedCommand(e.target.value)}>
          <option value="">Selecione um Comando</option>
          {commands.map((command, index) => (
            <option key={index} value={command.label}>
              {command.label}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => runCommand(selectedCommand)}>Executar Comando</button>
    </div>
  );
}

export default Ftp;
