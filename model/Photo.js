const mongoose= require("mongoose")
const schema=mongoose.Schema(
    {
        "photoid":{type:String,required:true},
        "name":{type:String,required:true},
        "stospa":{type:String,required:true},
        "photo":{type:String,required:true}
    }
)
let photomodel=mongoose.model("photos",schema)
module.exports={photomodel}