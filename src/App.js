import React, { useState } from 'react';

function App() {
  const [directory, setDirectory] = useState('');
  const [selectedCommand, setSelectedCommand] = useState('');
  const [output, setOutput] = useState('');


  const commands = [
    'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs',
    'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs',
    'Mais um Comando',
  ];

  const runCommand = async () => {
    try {
      const response = await fetch(`http://localhost:3001/run-command?dir=${encodeURIComponent(directory)}&command=${encodeURIComponent(selectedCommand)}`);
      const data = await response.text();
      console.log("DATA: ", data);
      setOutput(data);  // Atualiza o estado com a saída do comando
    } catch (error) {
      console.error('Erro ao enviar solicitação ao servidor:', error.message);
      setOutput('Erro ao executar o comando');  // Atualiza o estado em caso de erro
    }
  };


  return (
    <div>
      <h1>Meu App React</h1>
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
          {commands.map((cmd, index) => (
            <option key={index} value={cmd}>
              {cmd}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={runCommand}>Executar Comando</button>
      <br />
      <div>
        {console.log("ESSE EH O OUTPUT", output)}
        <strong>Saída do Comando:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
