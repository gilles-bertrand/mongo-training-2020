const fsp = require('fs').promises;
const render = require('../helpers/movieListRenderer');
const movie = require('../models/movie');
module.exports = async (req,res) =>{
    let request1 = await movie.find({'year':{$exists:true}},{'title':1,'year':1,'rating':1}).sort({'year':-1}).limit(5);
    let request2 = await movie.find({},{'title':1,'year':1,'rating':1}).sort({'title':1}).limit(5);
    let request3 = await movie.find({'rating':{$exists:true}},{'title':1,'year':1,'rating':1}).sort({'title':1}).limit(5);
    const html = await fsp.readFile(`${process.cwd()}/views/index.html`);
    let output = html.toString()
    .replace(/{{REQUEST_1}}/g,render(request1))
    .replace(/{{REQUEST_2}}/g,render(request2))
    .replace(/{{REQUEST_3}}/g,render(request3))

    res.writeHead(200,{'Content-type':'text/html'})
    res.end(output);
}