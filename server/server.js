const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3001;
app.use(cors());

app.get('/run-command', (req, res) => {
    const { dir, command } = req.query;

    console.log('Entrada:', req.query);
  
    if (!dir || !command) {
      res.status(400).send('Parâmetros obrigatórios ausentes.');
      return;
    }
  
    const directoryPath = path.resolve(dir);
    console.log('directoryPath: ', directoryPath)
  
    exec(command, { cwd: directoryPath }, (error, stdout, stderr) => {
        console.log('Saída do Comando:', stdout);

      if (error) {
        console.error(`Erro ao executar o comando: ${error.message}`);
        console.log('stderr:', stderr);
        res.status(500).send('Erro ao executar o comando');
        return;
      }
      console.log(`Saída do comando: ${stdout}`);
      res.send(stdout);
    });
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });