const express = require('express')
const router = express.Router();

const listOfService = [
    { Service: "Web Development ", description: "Build high-quality web applications using modern technologies" },
    { Service: "Mobile App Development ", description: "Develop mobile applications for iOS and Android platforms" },
    { Service: "Backend Development ", description: "Design and implement scalable and secure backend systems" },
    { Service: "Frontend Development ", description: "Create dynamic and responsive user interfaces using popular frameworks" },
    { Service: "Data Engineering ", description: "Extract, transform, and load large datasets to support business operations" },
    { Service: "AI Development ", description: "Build intelligent systems using machine learning and other AI techniques" },
    { Service: "Research and Development ", description: "Explore emerging technologies and innovate new solutions" },
    { Service: "Cloud Architecture ", description: "Design and deploy scalable and reliable cloud infrastructure" }
  ];

router.get('/',(request,response)=>{
    response.send("This is Service Page...")
})

router.param('id', (request,response, next, id) => {
    request.servicePage = listOfService[id]
    next()
})

router.get('/:id',(request,response)=>{
    console.log(request.servicePage.Service)
    response.write(request.servicePage.Service)
    console.log(request.servicePage.description)
    response.end(request.servicePage.description)
})

module.exports=router

