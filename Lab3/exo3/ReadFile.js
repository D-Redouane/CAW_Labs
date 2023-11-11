const fs = require('fs');
const fileName = process.argv[2]; 

if (fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });
} else {
    console.log('Please provide a file name.');
}
