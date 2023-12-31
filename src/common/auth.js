import bcrypt from 'bcryptjs'
import Jwt  from 'jsonwebtoken'
const hashPassword=async(password)=>{
    const salt =await bcrypt.genSalt(10)
    const hash =await bcrypt.hash(password,10)
    return hash

 }
 const hashCompare=async (password,hash)=>{
   return await bcrypt.compare(password,hash);
   }
   const creatToken=async(payload)=>{
      const token= await Jwt.sign(payload,process.env.JWT-SECRET,{
         expiresIn:process.env.JWT-EXPIRE
      });
      return token;
  }
  const validate=async(req,res,next)=>{
    let token=req.headers.authorization?.split(" ")[1];
    if(token){
        const decodeToken=await Jwt.decode(token);
        const curTime=(+ new Date())/1000;
        
        if(curTime<decodeToken.exp){
            next()
        }else{
            res.status(400).send({message:'token expired'})
        }
    }else{
 
        res.status(400).send({message:'No token found'})
    }
 }

 export default{hashPassword,hashCompare ,creatToken,validate}