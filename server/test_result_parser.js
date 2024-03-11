export default function parseOutput(output) {
    const lines = output.split('\n');
    const relevantInfo = [];
  
    for (const line of lines) {
      if (line.includes('user email') || line.includes('cnpj') || line.includes('Using the remessa_generated_seu_numero') || line.includes('Using the remessa_generated_file')) {
        relevantInfo.push(line.trim());
      }
    }
  console.log(relevantInfo)
    if (relevantInfo.length > 0) {
        const formattedInfo = relevantInfo.map((line) => line.replace(/^(Using the |user email:|cnpj:)/, '').trim());
        const successMessage = 'SUCCESS\n' + formattedInfo.join('\n');
      return { success: true, info: successMessage };
    } else {
      return { success: false, message: 'Nenhuma informação relevante encontrada.' };
    }
  }


  