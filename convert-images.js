const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng(inputFile, outputFile) {
    try {
        await sharp(inputFile)
            .resize(256, 256)
            .png()
            .toFile(outputFile);
        console.log(`Converted ${inputFile} to ${outputFile}`);
    } catch (error) {
        console.error(`Error converting ${inputFile}:`, error);
    }
}

// Convert SVGs to PNGs
const publicDir = path.join(__dirname, 'public');
const svgFiles = ['twitch-logo.svg', 'esport-logo.svg'];

svgFiles.forEach(async (svgFile) => {
    const inputPath = path.join(publicDir, svgFile);
    const outputPath = path.join(publicDir, svgFile.replace('.svg', '.png'));
    await convertSvgToPng(inputPath, outputPath);
});
