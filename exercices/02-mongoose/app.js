const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const router = require('./app.router');
const PORT = 8002;
const http = require('http');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/triptyk', { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Mongodb is connected')
        http.createServer(router).listen(PORT, err => {
            if (err) throw err;
            console.log(`Server is running on port : ${PORT}`)
        })
    } catch (e) {
        throw e;
    }
}
connectDB();

