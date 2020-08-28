const routes = [
    {url:'/', controller:'index'},
];

module.exports=(req,res) =>{
    let index = routes.findIndex(item =>item.url === req.url);
    if(index != -1){
        require(`${process.cwd()}/controllers/${routes[index].controller}`)(req,res);
    }
}