const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersCtrl = require("./usersCtrl.js");

app.use(bodyParser.json());

app.get('/api/users', usersCtrl.read);
app.get('/api/users/:id', usersCtrl.readByID);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:userType', usersCtrl.readByType);

app.put('/api/users/:userId', usersCtrl.updateUser)

app.post('/api/users', usersCtrl.addUser);

app.delete('/api/users/:userId', usersCtrl.removeUser);

const port = 3000;
app.listen( port, () => {console.log(`Server listening on port ${port}.`); } );