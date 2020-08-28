module.exports = (query) => {
    return query.reduce((prev, next) => {
        let s = JSON.stringify(next);
        let o = JSON.parse(s);
        return `${prev} \n <li>${o.title} , Year : ${o.year},  Rating : ${o.rating}</li>`
    }, '');
}