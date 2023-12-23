const path = require('path');
const rootDir = require("../util/path");

const User = require('../models/user')

exports.postUser = (req,res)=> {
    console.log("body", req.body);
    User.create(req.body)
    .then((user)=> {
        res.json(user);
    })
    .catch((err)=> console.log(err))
}