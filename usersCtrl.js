const userData = require('./userData.json');

module.exports = {
    read:(req, res) => {
        if (req.query.age) {
            let youngerAges = userData.filter(object => object.age < req.query.age);
            return res.status(200).send(youngerAges);
        } 
        else if (req.query.lastname) {
            let lastnames = userData.filter(object => object.last_name === req.query.lastname);
            return res.status(200).send(lastnames);
        }
        else if (req.query.email) {
            let emails = userData.filter(object => object.email === req.query.email);
            return res.status(200).send(emails);
        }
        else if (req.query.favorites) {
            let favorites = userData.filter(object => object.favorites.includes(req.query.favorites));
            return res.status(200).send(favorites);
        }
        res.status(200).send(userData);       
    },
    readByID:(req, res) => {
        let idMatch = userData.filter(object => object.id == req.params.id);
        if(idMatch[0]) {
            return res.status(200).send(idMatch[0]);

        } else {
            return res.status(404).json(null);
        }
    },
    getAdmins:(req, res) => {
        let admins = userData.filter(object => object.type === 'admin');
        return res.status(200).send(admins);
    },
    getNonAdmins:(req, res) => {
        let admins = userData.filter(object => object.type !== 'admin');
        return res.status(200).send(admins);
    },
    readByType:(req, res) => {
        let typeMatch = userData.filter(object => object.type === req.params.userType);
        return res.status(200).send(typeMatch);
    },
    updateUser:(req, res) => {
        for(let index = 0; index < userData.length; index++) {
            if(userData[index].id == req.params.userId) {
                userData[index] = req.body;
            }
        }
        res.status(200).send(userData);
    },
    addUser:(req, res) => {
        let newId = userData.length + 1;
        req.body["id"] = newId;
        let newUser = req.body;
        userData.push(newUser);
        res.status(200).send(userData);
    },
    removeUser:(req, res) => {
        for(let index = 0; index < userData.length; index++) {
            if(userData[index].id == req.params.userId) {
                userData.splice(index, 1)
            }
        }
        res.status(200).send(userData);
    }
}