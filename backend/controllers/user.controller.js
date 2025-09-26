
const register =  async (req,res)=>{
   const {username, email, password } =  req.body
   if(!username|| !email || !password){
    return res.status(400).json( {message:"All Fields Are Required"})
   }

   try {
    
   } catch (error) {
    
   }
} 