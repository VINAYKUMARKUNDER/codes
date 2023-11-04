
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


const user_data = {
    email:'admin@codesfortomorrow.com',
    password:'Admin123!@#'
}









const signJwtToken =  (req, res)=>{
    // console.log(user)
    const user = req.body

    // const jwtKey1 =  jwt.sign(user,'vinaykeys',{expiresIn:'1h'})

    if(user.email == user_data.email && user.password == user_data.password){
        const jwtKey =  jwt.sign(user,'vinaykeys',{expiresIn:'1h'})


        return res.status(200).json({
            status:200,
            success:1,
            message:`login successfull`,
            token:jwtKey
        });
    }else{
        return res.status(402).json({
            status:402,
            success:0,
            message:`User email and password in not valid..`
        })
    }
       
}


const checkJwt = ()=>{

    try {

        // console.log(key)
        
        const {key} = req.body;

        console.log(key)
      const decodeValue =  jwt.decode(key);

      const email = decodeValue.email;
      const password = decodeValue.password;

      if(email != user.email && password != user.password)return 'unauthrozied! email and password is wrong...'
      if(email != user.email)return 'unauthrozied! email is wrong...'
      else if(password != user.password)return 'unauthrozied! password is wrong...'
      else next()
    } catch (error) {
        return `key is not valid..`
    }

}


const verifyToken= (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
     
      token = token.slice(7);
   

    const decode = jwt.decode(token);


    if(decode.email != user_data.email && decode.password != user_data.password)
    return res.status(401).json({
        message: "Invalid Token...",
        decode: decode,
    })

      else next()


    } else {
      return res.status(401).json({
        message: "Access Denied! Unauthorized User",
      });
    }
  }


  router.post('/login/', signJwtToken)


module.exports = {signJwtToken,checkJwt,verifyToken, router};




