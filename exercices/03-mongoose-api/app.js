const router = require('./app.router');
const http = require('http');
const mongoose = require('mongoose');
const PORT = 8001;
mongoose.Promise = global.Promise;

const init = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/technocite', { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Mongo is now connected to your system')
        http.createServer( router ).listen(PORT, ( error ) => {
            if(error) throw error;
            console.log( `Server is running on port : ${PORT}`);
          })
    } catch (err) {
        throw err;
    }
}

init();


