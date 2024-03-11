import { commandOptions } from '../constants';

function CommandExecutorButton({ selectedCommand, selectedCategory, selectedEnvironment, directory, setOutput, setLoading , loading}) {
  const runCommand = async () => {
    console.log("selectedCommand :", selectedCommand)
    console.log("selectedCategory", selectedCategory)
    const selectedOption = commandOptions.find(option => option.label === selectedCommand && option.category === selectedCategory);
    
    console.log("comamnd OPtions", commandOptions.find(option => option.label === selectedCommand ))
    
    console.log("selectedOption", selectedOption)
    if (!selectedOption) {
      setOutput('Comando não encontrado.');
      return;
    }

    const { value: selectedCommandValue } = selectedOption;
    const finalCommand = selectedCommandValue.replace(/qa/g, selectedEnvironment);
    console.log("finalCommand", finalCommand)
    try {
        console.log("directory: ", directory)
        setLoading(true);
      const response = await fetch(`http://localhost:3001/run-command?dir=${encodeURIComponent(directory)}&command=${encodeURIComponent(finalCommand)}`);
      const data = await response.json();
      if (data.success) {
        setOutput(data.info);
    } else {
        setOutput('Erro ao executar o comando. ' + data.message);
    }
    } catch (error) {
      console.error('Erro ao enviar solicitação ao servidor:', error.message);
      setOutput('Erro ao executar o comando', "Error message :", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <button onClick={runCommand} disabled={loading}>
      Executar Comando
    </button>
    
  </div>
  );
}

export default CommandExecutorButton;
