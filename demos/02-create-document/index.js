//CONNECTION

//Créer un student
// let student = {
//     last_name: "Cardon",
//     first_name: "Yves",
//     email: "yves@triptyk.eu"
// };
//INSERTION
// db.students.insert(student);
//RECHERCHE TOUS LES STUDENTS
// let students  = db.students.find({"last_name":"Cardon","first_name":"Yves"},{"_id":1,"last_name":1});
// let students = db.students.find({
//     $and: [
//         { last_name: 'Cardon' },
//         { first_name:'Yves'}
//     ]

// },{'email':1}
// )
// let students = db.students.find(
//     {first_name :{ $in : ['Yves', 'joelle']}}
// );

// let students = db.students.find()


// let students =  db.students.find(
//     {
//         $or : [ {last_name:'Cardon'},{first_name :'joelle'}]
//     }
// )

// let students = db.students.find(
//     {
//         $or :[{first_name : {$in : ['gilles', 'joelle']}},{last_name:'Cardon'}]
//     }
// )

// let students = db.students.find(
//     {
//         fonction: {$exists : false}
//     }
// );

// let students = db.students.find(
//     {first_name : {$type :2}}
// )

// let students = db.students.find(
//     { $where : 'this.first_name.match(/^gill|yves$/i)'}
// )


// db.students.remove({
//     "first_name":"Sébastien"
// })
// let student = {
//     first_name:"Aurélien",
//     last_name:"Pirmez",
//     email:"aurelien@triptyk.eu",
//     address:{
//         city:"london",
//         country:"angleterre"
//     }
// }
// db.students.insert(student);

// let students = db.students.find(
//     {
//         "address.country":'france'
//     }
// );

// let students = db.students.find({
//     address: { $exists: false }
// },{_id:0,first_name:1}).sort(
//     { last_name: -1, first_name: 1 }
// )
// students.forEach(student => {
//     printjson(student);
// });
// let students = db.students.find( {address: { $exists: true }});
// print (students.count());
// print (students.length());


// let db = connect('technocite');
// let student = db.students.findOne({"first_name":"yves"});
// printjson(student);
// let newStudent=  db.students.update({"first_name":"Yves"},
// {
//     $set:{first_name: "yves"}
// })
// printjson(newStudent);

