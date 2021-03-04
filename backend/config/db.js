const mongoose = require("mongoose");

//Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://pickbins:Omega-3s@cluster0.dh1ez.mongodb.net/test";

const InitiateMongoServer = async () => {
 try {
   await mongoose.connect(MONGOURI, {
     useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
   });
   console.log("Connected to DB !!");
 } catch (e) {
   console.log(e);
   throw e;
 }
};

module.exports = InitiateMongoServer;


//var monngoURL = 'mongodb://mongo-service/database'

// mongoose.connect(monngoURL, { useNewUrlParser: true })
//     .then(
//         () => {
//             console.log("connected to mongo");
//         }
//     ).catch((error) => {
//         console.log("unable to connect to mongoDB");
//     });

// app.listen(4000, function() {
//     console.log('listening on 4000')
// });

