import React, { useState, useEffect } from 'react';

const FileViewer = () => {
  const [fileData, setFileData] = useState('');

  useEffect(() => {
    // Fazer uma solicitação para obter os dados do arquivo do servidor Node.js
    const fetchFileData = async () => {
      try {
        const response = await fetch('http://localhost:3001/file-content'); // Substitua pela URL do seu servidor Node.js
        const data = await response.text();
        setFileData(data);
        console.log(setFileData(data))
      } catch (error) {
        console.error('Erro ao obter dados do arquivo:', error);
      }
    };

    fetchFileData();
  }, []);

  return (
    <div>
      <h2>File Viewer</h2>
      <pre>{fileData}</pre>
    </div>
  );
};

export default FileViewer;
