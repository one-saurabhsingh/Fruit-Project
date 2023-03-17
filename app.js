const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/fruitDB", { useNewUrlParser: true});
//{
// await mongoose.connect('mongodb://localhost:27017/fruitDB');
//} catch (error) {
// handleError(error);
//}
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: {
       type: Number,
       min:1,
       max:10
  },
  review: String
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "apple",
  score:15,
  review: "very very nice"
});


//fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 21
});

//person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "Thik Thak"
});

const papaya = new Fruit({
  name: "Papaya",
  score: 18,
  review: "Mast"
});

const grapes = new Fruit({
  name: "Grapes",
  score: 18,
  review: "Only green waale are best"
});

Fruit.insertMany([kiwi,papaya,grapes], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Hacked NASA !");
  }
});

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  }else {

    console.log(fruits);
  mongoose.connecton.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "5dbc.."}, {name: "Peach"}, function(err){
//   if(err){
//       console.log(err);
//     }else{
//            console.log("Hacked NASA !");
//          }
// });

Fruit.deleteOne({name: "Peach"}, function(err){
  if(err){
      console.log(err);
    }else{
           console.log("Destroyed NASA !");
         }

});
