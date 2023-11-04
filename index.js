
const routes =  require('./routes/config');

const {signJwtToken,checkJwt} = require('./Auth/Login.controller');
const user = {
    email:'admin@codesfortomorrow.com',
    password:'Admin123!@#'
}

// signJwtToken(user)

 const   key=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGNvZGVzZm9ydG9tb3Jyb3cuY29tIiwicGFzc3dvcmQiOiJBZG1pbjEyMyFAIyIsImlhdCI6MTY5OTA3OTYwMH0.R1jqyBRA7hbVsVw2A4tYwtm4OhIAaucq-fHf4YV69jc`


// console.log(checkJwt(key));


const PORT = 8000;

routes.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})


routes.get('/', (req, res)=>{
        res.json('welcome in codes')
})

