const express = require('express');
const router = express.Router();
const cors=require('cors')
const mongoose=require('mongoose')

router.use(cors())
router.use(express.json());

const myDataModule = require('./myDataModule');

MONGO_URL="mongodb+srv://ibrar:ibrar@cluster0.nihdczf.mongodb.net/?retryWrites=true&w=majority"


// Get the current value of myData
// const currentData = myDataModule.getMyData();

// console.log("data variable passed "+ currentData)
let myData=null;



  
  // Define the user model using the user schema
//   const User = mongoose.model('User', userSchema);

  




module.exports=router.get('/users',async (req,res)=>{

console.log("get users")

     // List all collections
  const collections = await mongoose.connection.db.listCollections().toArray();
//   console.log('Collections:', collections);

const myCollectionName = 'user-data';
const myCollection = mongoose.connection.db.collection(myCollectionName);


// Now you can query the collection and retrieve its data
 myData = await myCollection.find({}).toArray();
 myDataModule.setMyData(myData);
console.log("myDatamodules "+myDataModule)

console.log('Data from', myCollectionName, ':', myData);

return res.status(200).json(myData);}

)
  


//deleting a user from db
module.exports=router.delete('/deleteuser/:id',async(req,res)=>{
console.log("inside baackend deleting user")

// const myData = myDataModule.getMyData();



// console.log(myData)
    try {
        const userIdHere = req.params.id;
        console.log(userIdHere)
    //     const deletedUserHere = await myData.findByIdAndDelete(userIdHere);
    //     console.log(deletedUserHere)
    //     if (!deletedUserHere) {
    //       return res.status(404).json({ message: 'User not found.' });
    //     }
    //     return res.status(200).json({ message: 'User deleted successfully.' });
    //   } catch (err) {
    //     console.error(err.message);
    //     return res.status(500).json({ message: 'Server error.' });
    //   }

    const myCollectionName = 'user-data';
    const myCollection = mongoose.connection.db.collection(myCollectionName);
//    const myDatais = await myCollection.find({}).toArray();

    const result = await myCollection.deleteOne({ _id: userIdHere });
    console.log("result "+result)
    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      const currentData = myDataModule.getMyData();
      console.log("data variable passed " + currentData);
      const myData = await myCollection.find({}).toArray();
      console.log('Data from', myCollectionName, ':', myData);
  
      return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Server error.' });
    }
  });


  //get custom ordr data

  module.exports=router.get("/customorder",async(req,res)=>{

  console.log("custom order here")

try{
  // List all collections
const collections = await mongoose.connection.db.listCollections().toArray();
//   console.log('Collections:', collections);

const myCollectionName = 'user-customorder';
const myCollection = mongoose.connection.db.collection(myCollectionName);


// Now you can query the collection and retrieve its data
myData = await myCollection.find({}).toArray();
myDataModule.setMyData(myData);
// console.log("myDatamodules "+myDataModule)

console.log('Data from', myCollectionName, ':', myData);

return res.status(200).json(myData);}
  
  catch(error){
console.log(error)
  }
}
  )



  //get static jo orders

  module.exports=router.get("/getorders",async(req,res)=>{

    console.log("static order here")
  
  try{
    // List all collections
  const collections = await mongoose.connection.db.listCollections().toArray();
  //   console.log('Collections:', collections);
  
  const myCollectionName = 'user-testorder';
  const myCollection = mongoose.connection.db.collection(myCollectionName);
  
  
  // Now you can query the collection and retrieve its data
  myData = await myCollection.find({}).toArray();
  myDataModule.setMyData(myData);
  // console.log("myDatamodules "+myDataModule)
  
  console.log('Data from', myCollectionName, ':', myData);
  
  return res.status(200).json(myData);}
    
    catch(error){
  console.log(error)
    }
  }
    )
  