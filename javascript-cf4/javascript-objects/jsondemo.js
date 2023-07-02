const user = {id: 1, firstname: 'Jordan', lastname: 'Pap.'};

const userJSON = JSON.stringify(user);

console.log(userJSON);

const userJS = JSON.parse(userJSON);

console.log(userJS);