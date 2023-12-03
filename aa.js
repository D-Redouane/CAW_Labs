const fs = require('fs');
const path = require('path');

const sourceFolder = './lab6/src'; // Change this to the path of your source folder
const outputFile = './output.jsx'; // Change this to the desired output file path

function concatenateFiles(folderPath, outputFilePath, depth = 0) {
  const files = fs.readdirSync(folderPath);

  let fileContent = '';
  let folderContent = '';
  let subfolderContent = ''; // Initialize subfolderContent here

  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      // If it's a directory, recursively process its contents
      subfolderContent = concatenateFiles(filePath, outputFilePath, depth + 1);

      // Check if the subfolder contains any .jsx files before adding spaces
      if (subfolderContent && subfolderContent.trim()) {
        folderContent += `\n\n\n\n\n\n\n\n// ${'  '.repeat(depth)}${file}\n${subfolderContent}\n\n`;
      } else {
        folderContent += subfolderContent;
      }
    } else if (file.endsWith('.jsx')) {
      // If it's a .jsx file, read its content
      const fileContentToAdd = fs.readFileSync(filePath, 'utf-8');
      fileContent += `\n\n\n\n\n\n\n\n// ${path.join(folderPath, file)}\n${fileContentToAdd}`;
    }
  });

  const content = folderContent + '\n\n' + fileContent;
  fs.appendFileSync(outputFilePath, content, 'utf-8');
}

concatenateFiles(sourceFolder, outputFile);
console.log('Files concatenated successfully!');
