import React, { useState } from 'react';

function App() {
  const [directory, setDirectory] = useState('');
  const [selectedCommand, setSelectedCommand] = useState('');
  const [output, setOutput] = useState('');

  const commandOptions = [
    { label: 'Upload Remessa FTP', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { label: 'Make Credit User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    // Adicione mais opções conforme necessário
  ];

  const runCommand = async () => {
    const selectedOption = commandOptions.find(option => option.label === selectedCommand);

    if (!selectedOption) {
      setOutput('Comando não encontrado.');
      return;
    }

    const { value: selectedCommandValue } = selectedOption;

    try {
      const response = await fetch(`http://localhost:3001/run-command?dir=${encodeURIComponent(directory)}&command=${encodeURIComponent(selectedCommandValue)}`);
      const data = await response.text();
      setOutput(data);
    } catch (error) {
      console.error('Erro ao enviar solicitação ao servidor:', error.message);
      setOutput('Erro ao executar o comando');
    }
  };

  return (
    <div>
      <h1>Automation React App</h1>
      <label>
        Caminho do Diretório:
        <input
          type="text"
          placeholder="Caminho do Diretório"
          value={directory}
          onChange={(e) => setDirectory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Selecione o Comando:
        <select value={selectedCommand} onChange={(e) => setSelectedCommand(e.target.value)}>
          <option value="">Selecione um Comando</option>
          {commandOptions.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <br />
      <button onClick={runCommand}>Executar Comando</button>
      <br />
      <div>
        <strong>Saída do Comando:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;


