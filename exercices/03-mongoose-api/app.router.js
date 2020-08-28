const api_root = '/api';
const api_version = '/v1';
const routes = [
    {url:`${api_root}${api_version}/students`,controller:'student',method:'GET',action:'list'},
    {url:`${api_root}${api_version}/students`,controller:'student',method:'POST',action:'create'},

];

module.exports =async (req,res) =>{
    let index = routes.findIndex(route=>route.url ===req.url && route.method === req.method);
    if(index !== -1){
        require(`${process.cwd()}/controllers/${routes[index].controller}`)[routes[index].action](req,res);
    }
}