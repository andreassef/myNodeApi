const userDao = require('../dao/user-dao');

class User {
    constructor(user) {
        this.id = user.id;
        this.nick = user.nick;
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
    }

    async create() {
        return new User(userDao.insert(this));
    }

    static index() {
        return userDao.index();
    }
}

module.exports = User;