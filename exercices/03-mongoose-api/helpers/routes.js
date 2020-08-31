exports.parser = async(req,res,routes) =>{

    let location = req.url.split('/');
    let id = location[location.length -1]
    return await routes.map(route =>{
        if(route.url.lastIndexOf(':id') !==-1)
        {
            return {url :route.url.replace(':id',id), controller:route.controller, method:route.method,action:route.action}
        } else {
            return { url :route.url, controller :route.controller, method :route.method,action:route.action}
        }
    })
 
}