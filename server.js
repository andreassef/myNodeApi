const app = require('./src/config/custom-express');

console.log("Server up!");
app.listen(3000, function(){
    console.log('Server Up! Port 3000');
})