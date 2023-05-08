const express=require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const connectDatabase=require("./config/database")

const dotenv=require('dotenv')


dotenv.config({ path: "backend/config/config.env" })


connectDatabase()


const app = express();
app.use(express.json())

app.use(cors()); // Add the cors middleware
const userRoutes=require("./routes/route.js")

app.use('/api',userRoutes)






// app.get('/',async (req,res)=>{
    
//     // List all collections
//  const collections = await mongoose.connection.db.listCollections().toArray();
//  console.log('Collections:', collections);

// const myCollectionName = 'user-data';
// const myCollection = mongoose.connection.db.collection(myCollectionName);


// // Now you can query the collection and retrieve its data
// myData = await myCollection.find({}).toArray();

// console.log('Data from', myCollectionName, ':', myData);

// return res.status(200).json(myData);}
    
// )






app.listen(5000,console.log('server is running'))


