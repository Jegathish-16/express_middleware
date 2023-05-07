const express = require('express')
const home = express()
const servicePage = require('./ServicePage.js')
const user = require("./user.js")
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
