// src/utils/logger.js

const fs = require('fs');
const path = require('path');

function removeLogoFile() {
  const filePath = path.join(__dirname, '..', './src', 'logo.svg');
  try {
    fs.unlinkSync(filePath);
    console.log('Removed logo.svg file: ' + filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('The file does not exist.');
    } else {
      console.log(err);
    }
  }
}

module.exports = removeLogoFile;