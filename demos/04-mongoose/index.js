const mongoose = require('mongoose');
const Client = require('./models/client');
mongoose.Promise = global.Promise;
const init = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/technocite', { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Mongo is now connected to your system')
        // createClient();
        // findAll();
        // update();
        deleteClient();
    } catch (err) {
        throw err;
    }

}

const createClient = async () => {
    let client = new Client({
        lastname: 'De Rubinat',
        firstname: 'Bernard',
        age: 56,
        address: '177a chaussée de Vleurgat 1000 Bruxelles',
        vat: 'BE0454553881',
        company: 'DERUBINAT SRL',
        sectors: ['Industry', 'Chieur'],
    });
    await client.save();
    console.log('Saved in database')
}

const findAll = async () => {
    // const results = await Client.find({ firstname: 'Gilles' });
    // const results = await Client.findOne({ firstname: 'Gilles' },{lastname:1,firstname:1});
    const results = await Client.findById({ _id: '5f465901d022ed623e2c2777' },{lastname:1,firstname:1});
    console.log(results);
}
const update = async () => {
    // const results = await Client.find({ firstname: 'Gilles' });
    // const results = await Client.findOne({ firstname: 'Gilles' },{lastname:1,firstname:1});
    // const results = await Client.findByIdAndUpdate('5f465901d022ed623e2c2777',{
    //     $set : {firstname:'Titi'}
    // },{new:true});
    // const results = await Client.findOneAndUpdate({ lastname: 'Bertrands' },{
    //     $set : {firstname:'Titi'}
    // },{upsert:true,new:true});
    // console.log(results);
    const client = await Client.findOne({ firstname: 'Titi' })
    console.log(client)
    client.firstname = 'TECHNOCITE'
    await client.save();
}

const deleteClient = async ()=>{
    await Client.findByIdAndDelete('5f466422bdab1bd70d131379')
    console.log("delete done");
}
init();
