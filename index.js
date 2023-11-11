import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://riddles-api.vercel.app/";

app.use(express.static("public"));

//connection to API to give random riddles with answers
app.get("/", async (req,res) =>{
    try{
        const result = await axios.get(API_URL + "/random");
        res.render("index.ejs",{riddle: result.data.riddle,
                                answer:result.data.answer});
    }catch(error){
        console.log(error.response.data);
        res.status(500);
    }  
});


app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`);
})