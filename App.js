const express = require('express')
const home = express()
const user = require("./user.js")
const aboutusPage = require('./aboutusPage.js')
const contactusPage = require('./contactusPage.js')
const productPage = require('./productPage.js')
const loginPage = require('./loginPage.js')
const servicePage = require('./servicePage.js')
// home.use(express.static("public"))
home.set('view engine','ejs')
home.use(express.urlencoded({extend:true}))
home.get('/',(request,response) =>{
    response.render("index")
})

home.use('/user',user)
// home.get('/',(request,response) =>{
    
//     response.send("Get Router on Home Page")

// })
home.use('/servicePage',servicePage)



home.listen(3500)
