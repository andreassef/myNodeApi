const db = require('../database/connection');

module.exports = {
    insert: async (user) => {
        const trx = await db.transaction();

        await trx('users').insert({
            nick: user.nick,
            name: user.name,
            password: user.password,
            email: user.email
        });
        await trx.commit();
    },

    index: async() => {
        return await db.select().table('users');
    }

}