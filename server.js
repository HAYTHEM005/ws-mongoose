const express = require('express');
const app = express();
const connectDB = require('./DB/connectDB')
connectDB();
const RestaurantDB = require('./Model/model')
const PORT = 4000 ;





//Add new Plat
 

//const Plat = new RestaurantDB({name:"plat rbo3 djaj",price:7})
 //Plat.save( (err)=>{
   //  if(err) return handleError(err)
   
//} )


// Find All plats
const search = async()=>{
    try {
       const data = await RestaurantDB.find({});
         console.log(data)
    } catch (error) {
        console.log(error)
    }
}
//search();

//FindOne plat
const searchOneEL = async()=>{
    const query1 = "62406c811be1bcf9b2984dc5";
    const query2 = "plat keftaji"
    try {
       const data = await RestaurantDB.findOne({name:query2});
         console.log(data)
    } catch (error) {
        console.log(error)
    }
}
 searchOneEL()

 // Find by ID

RestaurantDB.findById('62406b5eb974c177089d72e9', (error,data)=>{
         if (error) {console.log(error)}
    else { 
        console.log(data)}
    
}
)

// find by id and update
const user_id = '62406b5eb974c177089d72e9';
RestaurantDB.findByIdAndUpdate(user_id, { name: 'plat ma9rouna' },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});






//find one and Update Plat

const query = {name:"plat rbo3 djaj"};

const Update = async()=>{
    const data = await RestaurantDB.findOneAndUpdate(query,{$set:{name:"plat 7out",price:12}},(err,data)=>{
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }).clone()
}
 Update()

 // model findByIdAndRemove

 const delQuery = {_id:"62406c811be1bcf9b2984dc5"}
 const Delete = async()=>{
     const DelPlat = await RestaurantDB.findOneAndDelete(delQuery,(data,err)=>{
         try {
             console.log("removing Data",data)
         } catch (error) {
             console.log(error)
         }
     }).clone()
 }
 Delete();

 //model.remove

 RestaurantDB.remove({price:5}, function (err, result) {
    if (err){
        console.log(err)
    }else{
        console.log("Result :", result) 
    }
});

// search condition

var queryChain = function(done) {
    var NameToSearch = "plat 7out";
    RestaurantDB.find({ name: [NameToSearch] })
    .sort({ name:'plat 7out' })
    .limit(2)
    .select({ price: 12 })
    .exec(function(error, data) {
      if (error) return console.log(error);
      done(null,data)
    });
  };







app.listen(PORT,(err)=>{
    err ? console.log(err)
    :console.log(`server is running on port ${PORT}`)
})