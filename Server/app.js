const mongoose=require('mongoose')
const express=require('express')
const dotenv=require('dotenv')
const app=express()
const router=express.Router()
const auth=require('./auth')
const auth1=require('./auth1')
const Candidate=require('./electionSchema')
dotenv.config({path:'./config.env'})
const DB="mongodb+srv://pa1:pavan123@cluster0.xvv4x.mongodb.net/mernstack?retryWrites=true&w=majority"
const PORT=5000;
app.use(express.json())
app.use(require('./auth'))
app.use(require('./auth1'))
mongoose.connect(DB).then(()=>{
    console.log(`connection is successful`)
}).catch((err)=>
{
    console.log(`no connection`)
})
app.get('/',(req,res)=>
{
    res.send(`this is home`)
    console.log(`home`)
})
router.get('/resgister',(req,res)=>
{
    res.send()
})
app.get('/election',async (req,res)=>
{
    try{
        const user=await Candidate.find()
        res.send(user)
    }catch(err){
        console.log(err)
    }
})
app.put('/election/:id', async (req, res) => {
    try {
      await Candidate.findByIdAndUpdate({_id:req.params.id},{
        $set:{
          t:req.body.t
      }
     } );
      res.send('Item Updated!');

    } catch(err) {
        console.log(err);
        res.send(400).send('Server Error');
    }
});
app.listen(PORT,()=>{
    console.log(`server is listening on port number ${PORT}`)
})
