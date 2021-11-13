const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    min: 1,
    max: 10
  },
  review : String,
  
});

const Fruit = mongoose.model("fruit",fruitsSchema);

const fruit = new Fruit({
  name: "Mango",
  ratings: 10,
  review : "King of Fruits"

});

const waterMelon = new Fruit({
  name: "Water Melon",
  ratings:6,
  review:"Decent fruit"
})
waterMelon.save()
//fruit.save();
// const kiwi = new Fruit({
//   name: "kiwi",
//   ratings: 10,
//   review:"best fruit"
// });
// const orange = new Fruit({
//   name: "orange",
//   ratings: 6,
//   review:"weired taste"
// });
// const apple = new Fruit({
//   name: "apple",
//   ratings: 10,
//   review:"healthy fruit"
// });

// Fruit.insertMany([kiwi,orange,apple],function(err){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// })

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitsSchema,
});

const Person = mongoose.model("person",personSchema);

const person = new Person({
  name: "Roshani",
  age: 24 
});
// person.save();

Person.updateOne({_id: "615b3723b67d792fb3767353"},{favoriteFruit: waterMelon},function(err){
  if(err){
    console.log(err)
  }
  else{
    console.log("Updated successfully");
  }
});


// Fruit.find(function(err,fruits){
//   if (err) {
//     console.log(err);
//   }
//   else{
    
//     fruits.forEach(function(item){
//       console.log(item.name);
      
//     })
//   }
// });

// Fruit.updateOne({_id: "6159dc6adc6a28a8dda19982"},{ratings : 9},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Record Updated Successfully");
//   }
// });

// Fruit.deleteOne({_id: "6159dc4e9720e300d09ec473"},function(err){
//  if (err) {
//    console.log(err);
//  } else {
//    console.log("Deleted Successfully");
//  }
// });

// Person.deleteMany({ name: "john"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted Successfully");
//   }
// })