const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { photomodel } = require("./model/Photo")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Annajimmy:annajimmychirackal@cluster0.moqndmi.mongodb.net/photodb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let photo = new photomodel(input)
    photo.save()
    console.log(photo)
    res.json({ "status": "success" })
} 
)

app.post("/search",
    (req, res) => {
        res.send("Search page")
    }
)




app.get("/viewall",
    (req, res) => {
        photomodel.find().then(
            (data) => {
                res.json(data)
            }
        ).catch(
            (error) => {

            }
        ) 
    }
)

app.listen(8086, () => {
    console.log("server started")
}
)