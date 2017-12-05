function addPeople() {
  // extract name from input box
  var name = document.getElementById('name').value
  // extract email from input box
  var email = document.getElementById('email').value
  // create text node for name
  var namenode = document.createTextNode(name);
  // create text node for email
  var emailnode = document.createTextNode(email);
  // create td for name
  var nametd = document.createElement('td');
  // create td for email
  var emailtd = document.createElement('td');
  // append namenode to td
  nametd.appendChild(namenode);
  // append emailnode to td
  emailtd.appendChild(emailnode);
  // create tr element
  var tr = document.createElement('tr');
  // append tds to tr
  tr.appendChild(nametd);
  tr.appendChild(emailtd);
  // select table
  var table = document.getElementById('table');
  // append tr to table
  table.appendChild(tr);
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}