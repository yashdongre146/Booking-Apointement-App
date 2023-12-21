const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('./util/database')
const adminRoute = require('./routes/admin')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'hbs')

app.use(adminRoute)

sequelize.sync().then(()=>{
    console.log("Connected");
    app.listen(7000);
}).catch(err=>console.log(err))