//2)
// import pliku contact.js

//import pakietu yargs LUB moduł Commander

//funkcja invokeAction(wykorzystać)

//3)
//uruchom polecenia w terminalu i zrobić screenshotty

//odpowiednie odnośniki dodać do pliku Readme

console.log('jestem');

const { Command } = require('commander');
const program = new Command();
program
    .option("-a, --action <type>", "choose action") 

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":

        break;

        case "get":

        break;

        case "add":

        break;

        case "remove":

        break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv)