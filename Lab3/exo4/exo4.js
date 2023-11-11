const fs = require('fs');
const text = process.argv[2];

if (text) {
    fs.writeFile('f.txt', text, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('The file has been saved!');
        }
    });
} else {
    console.log('Please provide text to save to the file.');
}
