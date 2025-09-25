const {Schema, Types, model, models} =  require('mongoose')

const userSchema   =  new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
       
    },
      role :{
        type:String,
        enum:["user","admin"],
        default :"user"
    },
     votedFor:{
        type:Types.ObjectId,
        required:true,
        ref:"Vote"
    },

},
{
    timestamps:true
}
)

const User =   models.User || ("User",userSchema)

module.exports  =  User