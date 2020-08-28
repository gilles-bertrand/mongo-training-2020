const model = require('../models/student');
const student = require('../models/student');
exports.list = async (req, res) => {
    try {
        let data = await model.find({});
        res.statusCode = 200;
        res.setHeader('Content-Type: application/json');
        res.end(JSON.stringify(data))
    } catch (e) {
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }
};

exports.create = async (req, res) => {
      try {
        body = '';
        req.on('data', data => { body += data; })
        req.on('end', async () => {
            student.create(JSON.parse(body))
            res.statusCode = 201;
            res.end(JSON.stringify({ status: 'done' }))
        })
    } catch (e) {
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }
}