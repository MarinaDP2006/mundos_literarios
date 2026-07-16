import * as sharp from 'sharp';
import { fromPath } from 'pdf2pic';

export async function extractAndOptimizeCover(pdfPath: string, storyId: string) {
  const options = {
    density: 100,
    saveFilename: storyId,
    savePath: "./temp",
    format: "jpg",
    width: 600,
    height: 900
  };

  const storeAsImage = fromPath(pdfPath, options);
  await storeAsImage(1); // Extrae la página 1

  await sharp(`./temp/${storyId}.1.jpg`)
    .webp({ quality: 80 })
    .toFile(`./src/assets/covers/${storyId}.webp`);
    
  console.log(`Portada ST0${storyId} extraída y convertida a WebP.`);
}