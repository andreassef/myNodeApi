const { findById } = require('../dao/user-dao');
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

    static async findById(id) {
        const user = await userDao.findById(id);
        if (!user) {
            return null;
        }

        const obj = new User(user[0]);
        console.log(obj);
        console.log("aquuuuuuuuuui!")
        return obj;
    }

    async delete() {

        return await userDao.delete(this);
    }
}

module.exports = User;