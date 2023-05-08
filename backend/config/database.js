const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

MONGO_URL="mongodb+srv://ibrar:ibrar@cluster0.nihdczf.mongodb.net/?retryWrites=true&w=majority"


PORT=4000


console.log("port is "+MONGO_URL)

const connectDB=async()=>{

try{
const conn=await mongoose.connect(MONGO_URL,{


    useUnifiedTopology:true,
    useNewUrlParser:true,
   
})

console.log(`monogodb connnected : ${conn.connection.host}`)


     // List all collections
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log('Collections:', collections);

const myCollectionName = 'user-data';
const myCollection = mongoose.connection.db.collection(myCollectionName);


// Now you can query the collection and retrieve its data
const myData = await myCollection.find({}).toArray();
console.log('Data from', myCollectionName, ':', myData);



}
//Show data in collections
// for (const collection of collections) {
//     const data = await mongoose.connection.db.collection(collection.name).find().toArray();
//     console.log('Data in', collection.name, ':', data);
//   }

catch(error){

console.log(`error : ${error.message} and env is ${process.env.PORT}` )
process.exit(1)
}
}












module.exports=connectDB