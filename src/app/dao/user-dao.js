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
    },

    findById: async id => {
        const idUser = await db('users').select().where({id: id});
        return idUser;
    },

    delete: async user => {
        // if(user){
        //     console.log( user);

        // }
        const apagar = await db('users').del().where('id', user.id);
        return apagar;
    }
}