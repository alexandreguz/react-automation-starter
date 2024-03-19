import React, { useState } from 'react';
import CommandExecutorButton from '../CommandExecutorButton';
import { commandOptions } from '../../constants';

function CreateUser({ selectedEnvironment }) {
  const [selectedCommand, setSelectedCommand] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);


  const createUserCommands = commandOptions
    .filter((option) => option.category === 'CREATE USER')
    .map((command) => command.label);

  return (
    <div>
      <label className="input-label">
        {/* Selecione o Comando: */}
        <select className="input-select"  onChange={(e) => setSelectedCommand(e.target.value)}>
          <option value="">Selecione um Comando</option>
          {createUserCommands.map((command, index) => (
            <option key={index} value={command}>
              {command}
            </option>
          ))}
        </select>
        </label>
        <CommandExecutorButton 
          selectedCommand={selectedCommand}
          selectedCategory="CREATE USER"
          selectedEnvironment={selectedEnvironment}
          directory="/Users/alexandreguz/Documents/BS2/qa/automation"
          setOutput={setOutput}
          setLoading={setLoading}
          loading={loading}
        />
      <br />
      <div>{
        loading ? <p>Aguarde, o teste ainda está rodando...</p> :
      <div >
        <strong>Saída do Comando:</strong>
        
           <div class="body-text">
             <div class="title prompt">
              <pre> 
                 {output && `Teste: ${selectedCommand}`} <br/> {output}
              </pre>
            </div>
           </div>
      </div>
      }
      </div>
    </div>
  );
}

export default CreateUser;
