import React, { useState } from 'react';
import CommandExecutorButton from '../CommandExecutorButton';
import { commandOptions } from '../../constants';

function Ftp({selectedEnvironment}) {
  const [selectedCommand, setSelectedCommand] = useState('');
  const [output, setOutput] = useState('');

  const ftpCommands = commandOptions
    .filter((option) => option.category === 'FTP')
    .map((command) => command.label);

  return (
    <div>
      <label>
        Selecione o Comando:
        <select onChange={(e) => setSelectedCommand(e.target.value)}>
          <option value="">Selecione um Comando</option>
          {ftpCommands.map((command, index) => (
            <option key={index} value={command}>
              {command}
            </option>
          ))}
        </select>
      </label>
      <CommandExecutorButton
        selectedCommand={selectedCommand}
        selectedCategory="FTP"
        selectedEnvironment={selectedEnvironment}
        directory="/Users/alexandreguz/Documents/BS2/qa/automation"
        setOutput={setOutput}
      />
      <br />
      <div>
        <strong>Saída do Comando:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Ftp;
