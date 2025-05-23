const contacts = require("./contact.js")
require("colors");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(contacts.listContacts());
      break;

    case "get":
      console.log(contacts.getContactsById(id));
      break;

    case "add":
      console.log(contacts.addContact(name, email, phone));
      break;

    case "remove":
      contacts.removeContact(id);
      console.log(`Contact with id ${id} has been removed.`);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
//
invokeAction(argv);
