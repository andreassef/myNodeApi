var User = require('../model/userModel');

module.exports = {
    create: async (req, resp) => {
        const { nick, name, password, email } = req.body;
        
        try{
            const userData = new User({
                nick,
                name,
                password,
                email
            });
            userData.create();
            return resp.status(201).send();
        }catch(erro) {
            resp.status(500).json({ erro: erro.message });
        }
    },

    index: async (req, resp) => {
        const userList = await User.index();
        return resp.json(userList);
    } 
}