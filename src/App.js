import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Ftp from './components/TestCategories/Ftp';
import CreateUser from './components/TestCategories/CreateUser';
import Cuc from './components/TestCategories/Cuc';
import { commandOptions, environmentOptions, categories } from './constants';
import '../src/App.css'

function App() {
  const [directory, setDirectory] = useState('/Users/alexandreguz/Documents/BS2/qa/automation');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEnvironment, setSelectedEnvironment] = useState('Select Environment');
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState('');

  const renderTestCategoryComponent = () => {
    switch (selectedCategory) {
      case 'FTP':
        return <Ftp commands={commandOptions.filter((option) => option.category === 'FTP')} setSelectedCommand={setSelectedCommand} selectedEnvironment={selectedEnvironment} />;
      case 'CREATE USER':
        return <CreateUser commands={commandOptions.filter((option) => option.category === 'CREATE USER')} setSelectedCommand={setSelectedCommand} selectedEnvironment={selectedEnvironment}/>;
      case "CUC":
        return <Cuc commands={commandOptions.filter(option => option.category === "CUC")}  setSelectedCommand={setSelectedCommand} selectedEnvironment={selectedEnvironment}/>;
      default:
        return null;
    }
  };

  return (
    <div className='App'>
      <NavBar
        categories={categories}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setIsCategorySelected(true);
        }}
      />
<br/><br/><br/><br/><br/><br/>

      <h1>Automation React App - test category {selectedCategory}</h1>
      {isCategorySelected ? (
        <>
          <label className="input-label">
            Caminho do Diretório:
            <input
              className="input-text"
              type="text"
              placeholder="Caminho do Diretório"
              value={directory}
              onChange={(e) => setDirectory(e.target.value)}
            />
          </label>
          <br/>
          <label className="input-label">
            Selecione o Ambiente:
            <select className="input-select" value={selectedEnvironment} onChange={(e) => setSelectedEnvironment(e.target.value)}>
              {environmentOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <br />
          {renderTestCategoryComponent()}
          <br />
          <br />

        </>
      ) : (
        <p>Escolha uma categoria no NavBar</p>
      )}
      <br />
    </div>
  );
}

export default App;
