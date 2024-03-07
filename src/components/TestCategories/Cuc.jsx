import React, { useState } from 'react';
import CommandExecutorButton from '../CommandExecutorButton';

function Cuc({ commands, runCommand }) {
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
      <CommandExecutorButton onClick={() => runCommand(selectedCommand)} />
    </div>
  );
}

export default Cuc;