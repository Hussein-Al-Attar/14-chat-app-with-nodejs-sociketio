const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io')
const io = socket(server);
require('./utils/socket')(io);
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {    
    res.render('index')
})
//Get username and roomname from form and pass it to room
app.post('/room', (req, res) => {
    roomname = req.body.roomname;
    username = req.body.username;
    res.redirect(`/room?username=${username}&roomname=${roomname}`)
})

//Rooms
app.get('/room', (req, res)=>{
    res.render('room')
})
var port = process.env.PORT || 3000;

//Start Server
const server = app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})