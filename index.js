const express=require('express');
const Joi=require('joi');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const flowers=[
{label: 'tulip',color:'pink',id: 1},
{label: 'rose',color:'yellow',id: 2},
{label: 'blossom',color:'white',id: 3}
];

app.get('/', (req, res) => {
    res.send('flowers rest API');
 });

 app.get('/flowers', (req,res)=> {
    res.status(200).send(flowers);
});

app.get('/flowers/:id', (req, res) => {
    const x = flowers.find(function(element)
    {
        if(element.id === parseInt(req.params.id))
         return true;
           
    });
       
    if (!x) 
    {
        res.status(400).send('SORRY PLEASE TRY AGAIN');
    }
    res.status(200).send(x);
    });


app.post('/flowers', (req, res) => {
    const order = req.body;
    const schema=
    {
        flower_name: Joi.string().min(4).required(), 
        color: Joi.string().required() 
    };
    const result = Joi.validate(order,schema);

    if(result.error)
    {
        res.status(404).send(result.error.details[0].message); 
        return;
    }
    else
    {

        const flower={
            
            label:req.body.flower_name,
            color:req.body.color,
            id:flowers.length+1
        };
        flowers.push(flower);
        res.status(200).json({  message: "order is placed", data:flower});
    
    console.log(flower);
    }
});

app.put('/flowers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
   
    const x = flowers.find(function(element){
        
        if(element.id===id)
         return true;
    });
    console.log(x);
  
    if (!x) 
    {
        res.status(404).json({message:"Please provide a valid id"});
        return;
    }

    else
    {
        x.label = req.body.flower_name;
        x.color = req.body.color;
        res.status(200).json({message:"data has been updated sucessfully",data:x});
    }
     console.log(x);
});

app.delete("/flowers/:id", (req, res) => {
    const x = parseInt(req.params.id);
  
    for (let flower of flowers) {
      if (flower.id === x) {
        y=flowers.indexOf(flower);
        flowers.splice(y, 1);
        return res.status(200).json({ message: "data is deleted successfully" });
      }
    }
        res.status(404).json({ message: "Please enter a valid id" });
  });

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
  
      

     
   
          
           
             
             
              
            
          
          
         

           

            
           
            
       





     

