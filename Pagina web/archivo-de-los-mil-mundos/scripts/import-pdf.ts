import * as fs from 'fs';
import pdf from 'pdf-parse';

async function extractData(pdfPath: string) {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  // Este texto se enviaría a la API de Gemini para obtener el JSON estructurado
  return data.text;
}