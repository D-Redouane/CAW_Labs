const fs = require('fs');
const path = require('path');
 
const sourceFolder = './lab6/src'; // Change this to the path of your source folder
const outputFile = './output.txt'; // Change this to the desired output file path
const extensions = ['.jsx', '.css']; // files that end with extentions that you want

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

      // Check if the subfolder contains any extension files before adding spaces
      if (subfolderContent && subfolderContent.trim()) {
        folderContent += `\n\n\n\n\n\n\n\n// ${'  '.repeat(depth)}${file}\n${subfolderContent}\n\n`;
      } else {
        folderContent += subfolderContent;
      }
    } else {
      // If it's a file with one of the specified extensions, read its content
      for (const extension of extensions) {
        if (file.endsWith(extension)) {
          const fileContentToAdd = fs.readFileSync(filePath, 'utf-8');
          fileContent += `\n\n\n\n\n\n\n\n// ${path.join(folderPath, file)}\n${fileContentToAdd}`;
          break; // Break the loop once a matching extension is found
        }
      }
    }
  });

  const content = folderContent + '\n\n' + fileContent;
  fs.appendFileSync(outputFilePath, content, 'utf-8');
}

concatenateFiles(sourceFolder, outputFile);
console.log('Files concatenated successfully!');
