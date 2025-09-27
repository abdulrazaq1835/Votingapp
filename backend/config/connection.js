const {connect} =  require('mongoose')

let isConnected;

const connectDatabase  =  async ()=>{
   //  if(isConnected) 
 try {

   console.log(process.env.MONGO_URI)
    await connect(process.env.MONGO_URI).then((data)=>{
     console.log(`mongo db is connected ${data.connection.host}`)
    })
      //  isConnected =  true
    
 } catch (error) {
      console.log("database is not connected")
 }

 
}

module.exports  = connectDatabase