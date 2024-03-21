// import React, { useState } from 'react';
// import NavBar from './components/NavBar';
// import Ftp from './components/TestCategories/Ftp';
// import CreateUser from './components/TestCategories/CreateUser';
// import Cuc from './components/TestCategories/Cuc';
// import { commandOptions, environmentOptions, categories } from './constants';
// import '../src/App.css'

// function App() {
//   const [directory, setDirectory] = useState('/Users/alexandreguz/Documents/BS2/qa/automation');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedEnvironment, setSelectedEnvironment] = useState('Select Environment');
//   const [isCategorySelected, setIsCategorySelected] = useState(false);
//   const [selectedCommand, setSelectedCommand] = useState('');

//   const renderTestCategoryComponent = () => {
//     switch (selectedCategory) {
//       case 'FTP':
//         return <Ftp commands={commandOptions.filter((option) => option.category === 'FTP')} setSelectedCommand={setSelectedCommand} selectedEnvironment={selectedEnvironment} />;
//       case 'CREATE USER':
//         return <CreateUser commands={commandOptions.filter((option) => option.category === 'CREATE USER')} setSelectedCommand={setSelectedCommand} selectedEnvironment={selectedEnvironment}/>;
//       case "CUC":
//         return <Cuc commands={commandOptions.filter(option => option.category === "CUC")}  setSelectedCommand={setSelectedCommand} selectedEnvironment={selectedEnvironment}/>;
//       case 'FileViewer':
//         return <FileViewer data={fileViewerData} />;
      
//         default:
//         return null;
//     }
//   };

//   return (
//     <div className='App'>
//       <NavBar
//         categories={categories}
//         onSelectCategory={(category) => {
//           setSelectedCategory(category);
//           setIsCategorySelected(true);
//           setFileViewerData(data); // Armazena os dados obtidos pelo FileViewer

//         }}
//       />
// <br/><br/><br/><br/><br/><br/>

//       <h1>Automation React App - test category {selectedCategory}</h1>
//       {isCategorySelected ? (
//         <>
//           <label className="input-label">
//             Caminho do Diretório:
//             <input
//               className="input-text"
//               type="text"
//               placeholder="Caminho do Diretório"
//               value={directory}
//               onChange={(e) => setDirectory(e.target.value)}
//             />
//           </label>
//           <br/>
//           <label className="input-label">
//             {/* Selecione o Environment para Rodar o Teste: */}
//             <select className="input-select" placeholder='Any String You Want' onChange={(e) => setSelectedEnvironment(e.target.value)}>
//             <option value="">Selecione o Environment: </option>
//               {environmentOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <br />
//           {renderTestCategoryComponent()}
//           <br />
//           <br />

//         </>
//       ) : (
//         <p>Escolha uma categoria no NavBar</p>
//       )}
//       <br />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Ftp from './components/TestCategories/Ftp';
import CreateUser from './components/TestCategories/CreateUser';
import Cuc from './components/TestCategories/Cuc';
import FileViewer from './components/FileViwer'
import { commandOptions, environmentOptions, categories } from './constants';
import '../src/App.css'

function App() {
  const [directory, setDirectory] = useState('/Users/alexandreguz/Documents/BS2/qa/automation');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEnvironment, setSelectedEnvironment] = useState('Select Environment');
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState('');
  const [showFileViewer, setShowFileViewer] = useState(false);

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

  const handleViewFileViewer = () => {
    setSelectedCategory('File Viewer');
    setShowFileViewer(true);
  };

  return (
    <div className='App'>
      <NavBar
        categories={categories}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          setIsCategorySelected(true);
        }}
        onViewFileViewer={handleViewFileViewer}
      />
      <br/><br/><br/><br/><br/><br/>


  {showFileViewer && selectedCategory === 'File Viewer' ? <FileViewer /> : 
<div>

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
            <select className="input-select" placeholder='Any String You Want' onChange={(e) => setSelectedEnvironment(e.target.value)}>
            <option value="">Selecione o Environment: </option>
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
    }
    </div>
  );
}

export default App;

