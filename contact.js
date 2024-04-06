//1)

// contectsPath = kontakt do plik contact.json ( metody modułu path)

// dodać funkcję do pracy ze zbiorem kontaktów ( moduł fs oraz metody readFile() i writeFile() + eksport funkcji przez module.exports)


const { fs } = require('fs').promises;
const path = require('path');

console.log("Hello everybody all")


const contactsPath = (data, path) => {
    try {
        fs.writeFile(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

contactsPath(__dirname);

module.exports = contactsPath;









