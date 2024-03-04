import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Ftp from './components/TestCategories/Ftp';
import CreateUser from './components/TestCategories/CreateUser';

function App() {
  const [directory, setDirectory] = useState('/Users/alexandreguz/Documents/BS2/qa/automation');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCommand, setSelectedCommand] = useState('');
  const [selectedEnvironment, setSelectedEnvironment] = useState('qa');
  const [output, setOutput] = useState('');
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const commandOptions = [
    { category: 'FTP', label: 'Upload Remessa FTP', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Aprovar Remessa', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Remessa Qualificada', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Upload Retorno', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },
    { category: 'FTP', label: 'Verificar Retorno Qualificado', value: 'MIX_ENV=qa mix test test/regression/non_ui/ftp/upload_remessa_one_receivable_test.exs' },


    { category: 'CREATE USER', label: 'Make Credit User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Current Account User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Cambio User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Finvendas User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Ancora User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },
    { category: 'CREATE USER', label: 'Make Referral User', value: 'MIX_ENV=qa mix test test/regression/open_sea/cadastro/credito_user_test.exs' },

    // Adicione mais opções conforme necessário
  ];

  const environmentOptions = ['qa', 'qa2', 'qa-venus'];

  const categories = ['FTP', 'CREATE USER'];

  const runCommand = async () => {
    const selectedOption = commandOptions.find(option => option.label === selectedCommand && option.category === selectedCategory);

    if (!selectedOption) {
      setOutput('Comando não encontrado.');
      return;
    }

    const { value: selectedCommandValue } = selectedOption;

    const finalCommand = selectedCommandValue.replace(/qa/g, selectedEnvironment);

    try {
      const response = await fetch(`http://localhost:3001/run-command?dir=${encodeURIComponent(directory)}&command=${encodeURIComponent(finalCommand)}`);
      const data = await response.text();
      setOutput(data);
    } catch (error) {
      console.error('Erro ao enviar solicitação ao servidor:', error.message);
      setOutput('Erro ao executar o comando');
    }
  };

  const renderTestCategoryComponent = () => {
    switch (selectedCategory) {
      case 'FTP':
        return <Ftp commands={commandOptions.filter(option => option.category === 'FTP')} onSelectCommand={setSelectedCommand} />;
      case 'CREATE USER':
        return <CreateUser commands={commandOptions.filter(option => option.category === 'CREATE USER')} onSelectCommand={setSelectedCommand} />;
      // Adicione mais casos conforme necessário
      default:
        return null;
    }
  };

  const renderCommandDropdown = () => {
    if (isCategorySelected) {
      const categoryCommands = commandOptions
      .filter(option => option.category === selectedCategory)
      .map((option, index) => (
        <option key={index} value={option.label}>
          {option.label}
        </option>
      ));
      return (
        
        <label>
          Selecione o Comando:
          <select onChange={(e) => setSelectedCommand(e.target.value)}>
            <option value="" disabled hidden>Selecione um Comando</option>
            {categoryCommands}
          </select>
        </label>
      );
    }
    return null;
  };

  return (
    <div>
      <NavBar
        categories={categories}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setIsCategorySelected(true);
        }}
      />
      <h1>Automation React App - test category {selectedCategory}</h1>
      {isCategorySelected ? (
        <>
          <label>
            Caminho do Diretório:
            <input
              type="text"
              placeholder="Caminho do Diretório"
              value={directory}
              onChange={(e) => setDirectory(e.target.value)}
            />
          </label>
<br/>
          <label>
            Selecione o Ambiente:
            <select value={selectedEnvironment} onChange={(e) => setSelectedEnvironment(e.target.value)}>
              {environmentOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <br />
          {renderTestCategoryComponent()}
          {renderCommandDropdown()}

          <br />
          <br />
          <button onClick={runCommand}>Executar Comando</button>
        </>
      ) : (
        <p>Escolha uma categoria no NavBar</p>
      )}
      <br />
      <div>
        <strong>Saída do Comando:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;


