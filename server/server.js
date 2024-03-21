import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import path from 'path';
import parseOutput from './test_result_parser.js';
import fs from 'fs'

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
    const parsedOutput = parseOutput(stdout);
    console.log("OUTPUT: ",parsedOutput)
    res.json(parsedOutput);
    });
  });
  
  app.get('/file-content', (req, res) => {
    const filePath = '/Users/alexandreguz/Documents/BS2/qa/automation/test/generated_test_data.txt';
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao ler o arquivo' });
      }
      res.send(data);
    });
  });

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });