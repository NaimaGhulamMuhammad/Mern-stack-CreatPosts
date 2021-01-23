var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require('cors');
var postRoutes = require("./routes/posts");
const app = express();

app.use(bodyParser.json({limit: 30, extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({origin: true, credentials: true}));
app.options('*', cors())

app.set('/*', (req,res)=> {
  res.header('Access-Control-Allow-Origin', '*')
})

app.use('/posts', postRoutes)
app.get('/', (req,res)=> {
  res.send("<h1>Memories Api</h1>")
})
const CONNECTION_URL = process.env.MONGOURI;
const PORT = process.env.PORT || 4000 ;
 
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true,useUnifiedTopology: true})
.then( () => {app.listen(PORT, () => {console.log(`The server is running on Port: ${PORT}`);})})
.catch( (err) => {console.log('ERROR:', err.message)})


mongoose.set('useFindAndModify',false);