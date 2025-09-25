const jwt= require('jsonwebtoken')

const authenticate =  (req,res,next)=>{
  try {

    const  token =  req.headers.authorization?.split("")[1]

    if(!token) return res.status(401).json({message:"Unauthorized"})
      const decode = jwt.verify(token,process.env.JWT_SECRET)
    const req.user =  await User
  } catch (error) {
    
  }
}