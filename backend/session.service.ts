// const { MongoClient } = require('mongodb');
// const connectionString = "mongodb+srv://backend:RwGn6wd5r7N@mtg-set-rev-0.qhlzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// export default class SessionService {
//     Cache = [];
//     DBClient = null;

//     constructor() {
//         this.Cache = [];
//         this.DBClient = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//     }

//     Init = async function() {
//         try {
//             await this.DBClient.connect();
//             let sessionsCursor = await this.DBClient.db("MTG-SET-REV").collection("Sessions").find();
//             let results = await sessionsCursor.toArray();

//             if(results && results.length > 0) {
//                 console.log("Cache read from MongoDB.  Count: " + results.length);
//                 Cache = results;
//             }
//             else {
//                 Cache = [];
//             }
//         }
//         catch(e) {
//             throw new Error("Error connecting to MongoDB: " + e);
//         }
//         finally {
//             await this.DBClient.close();
//         }
//     }

//     SetToDB = async function(newSession) {
//         try {
//             await this.DBClient.connect();
//             let sessionsCursor = await this.DBClient.db("MTG-SET-REV").collection("Sessions").find();
//             let results = await sessionsCursor.toArray();
//         }
//         catch(e) {
//             throw new Error("Error connecting to MongoDB: " + e);
//         }
//         finally {
//             await this.DBClient.close();
//         }
//     }

//     Set = function(session) {
//         if(!session.id) {
//             session.id = this.GetSillyUniqueId();
//         }

//         this.Cache[session.id] = session;
//         return session.id;
//     }

//     Get = function(id) {
//         return this.Cache[id];
//     }

//     GetAll = function() {
//         return this.Cache;
//     }

//     GetSillyUniqueId = function() {
//         let x = new Date().getTime();
//         return x.toString().split('').reduce((accu, current) => {
//             return accu += String.fromCharCode(97 + parseInt(current));
//         }, "");
//     }

//     Validate = function(session) {
//         if(session.privacy > 1) {
//             return false;
//         }
//         // validate set here, somehow.

//         return true;
//     }
// }