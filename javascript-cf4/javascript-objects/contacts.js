const contacts = [
  {
    firstname: "Jord",
    lastname: "Papa.",
    phoneNumber: "2109621213"
  },
  {
    firstname: "George",
    lastname: "Dan.",
    phoneNumber: "2109648521"

  }
];

function insert(firstname, lastname, phoneNumber) {
  if (firstname.trim() && lastname.trim() && phoneNumber.trim()) {
    contacts.push({firstname, lastname, phoneNumber})
  }
}

class ContactAlreadyExistsError extends Error {
  constructor(contact) {
    super("Contact " + contact.phoneNumber + " already exists");
    this.name = 'ContactAlreadyExistsError';
  }
}

function insertContact(contact) {
  try {
    if (contacts.find(e => e.phoneNumber === contact.phoneNumber)) {
      throw new Error("Contact " + contact.phoneNumber + " already exists");
    }

    insert(contact.firstname, contact.lastname, contact.phoneNumber);

  } catch (error) {
    if (error instanceof ContactAlreadyExistsError) {
    // console.log(error.message);
    throw error;
    }
  }
}

function remove(phoneNumber) {
  let numberFound = contacts.find(contact => contact.phoneNumber === phoneNumber);
  if (!numberFound) {
    return;
  }

  let index = contacts.findIndex(contact => contact.phoneNumber === phoneNumber);
  contacts.splice(index, 1);
}

function replace(oldNumber, newNumber) {
  let oldNumberFound = contacts.find(contact => contact.phoneNumber === oldNumber);
  let newNumberFound = contacts.find(contact => contact.phoneNumber === newNumber);

  if (!oldNumberFound || newNumberFound) return;

  contacts.forEach(contact => {
    if (contact.phoneNumber === oldNumber) {
        contact.phoneNumber = newNumber;
    }
  })
}

function traverseContacts() {
  contacts.forEach(contact => console.log(contact));
}

try {
  insertContact({firstname: "Athena", lastname: "Lefion", phoneNumber: "210"});
  insertContact({firstname: "Jacob", lastname: "Train", phoneNumber: "2109621213"});  
} catch(err) {
  console.log(err.message);
}

traverseContacts();