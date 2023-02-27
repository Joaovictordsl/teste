const express = require ('express');
const Datastore = require('nedb')
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '5mb'}));

const database = new Datastore('database.db');
database.loadDatabase();


app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    database.insert(data);
    response.json({
        status: 'success',
        color: data.key
    })
});