db = connect('technocite');
let dbs = db.adminCommand('listDatabases');
printjson(dbs);
