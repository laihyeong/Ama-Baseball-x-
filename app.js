const express = require('express');
const app = express();

const PORT = 3000;



app.use(express.static('public'));

const auth = require('./routes/auth');
app.use('/auth', auth);

const main = require('./routes/main');
app.use('/main', main);



app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, function() {
    console.log(`✅ Express server on 'http://localhost:${PORT}'`);
})