
const student = require('../models/student');

exports.update = async (req, res) => {
    try {
        let response = {};
        let values = req.url.split('/');
        let id = values[values.length - 1];
        if (!id) {
            response.status = 400;
            response.message = 'Bad parameter';
            res.end(JSON.stringify(response));
        } else {
            try {
                body = '';
                req.on('data', data => { body += data; })
                req.on('end', async () => {
                    let data = await student.findByIdAndUpdate(id, JSON.parse(body),{new:true})
                    res.setHeader('Content-Type', 'application/json');
                    if (data._id) {
                        response.status = 200;
                        response.message = 'Object successfully updated'
                    }
                    else {
                        response.status = 500;
                        response.message = "Error while updating"
                    }
                    res.end(JSON.stringify(response))
                })

            } catch (e) {
                console.log(e)
            }


        }
    } catch (e) {
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        // res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }

}

exports.delete = async (req, res) => {
    try {
        let values = req.url.split('/');
        let id = values[values.length - 1];
        console.log(id)
        if (!id) {
            res.status = 400;
            res.message = 'Bad parameter';
            res.end(JSON.stringify(res));
        } else {
            let data = await student.findByIdAndDelete(id)
            res.setHeader('Content-Type', 'application/json');
            if (data._id) {
                res.status = 200;
                res.message = 'Object successfully deleted'
            }
            else {
                res.status = 500;
                res.message = "Error while deleting"
            }
            res.end(JSON.stringify(res.message))
        }
    } catch (e) {
        console.log(e)
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        // res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }

}

exports.list = async (req, res) => {
    try {
        let data = await student.find({});
        res.statusCode = 200;
        //  res.setHeader('Content-Type: application/json');
        res.end(JSON.stringify(data))
    } catch (e) {
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        // res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }
};


exports.read = async (req, res) => {
    try {
        let values = req.url.split('/');
        let id = values[values.length - 1];
        let data = await student.findById(id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data))
    } catch (e) {
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        // res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }
};
exports.create = async (req, res) => {
    try {
        body = '';
        req.on('data', data => { body += data; })
        req.on('end', async () => {
            console.log('truc')
            student.create(JSON.parse(body))
            res.statusCode = 201;
            res.end(JSON.stringify({ status: 'done' }))
        })
    } catch (e) {
        const data = {
            error: 1,
            message: 'There was an error in the request to the database!'
        }
        // res.setHeader('Content-Type: application/json');
        res.statusCode = 500;
        res.end(JSON.stringify(data));
    }
}
