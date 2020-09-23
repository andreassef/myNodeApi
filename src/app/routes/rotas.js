const userController = require('../controllers/userController');

module.exports = (app) => {
    app.post('/user', userController.create);

    app.get('/user', userController.index);

    app.delete('/user/:id', userController.delete);
}