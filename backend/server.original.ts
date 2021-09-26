// import express from 'express';

// import SessionService from "./session.service";

// const app = express();
// const PORT = 3100;

// app.use(express.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// let sessionService = new SessionService();
// sessionService.Init().catch(e => { console.log(e); });

// app.get('/api/session/', (req, res) => {
//     console.log("Get Sessions");
//     res.send(JSON.stringify(sessionService.GetAll()));
// });

// app.get('/api/session/:id', (req, res) => {
//     console.log("Get Session:", req.params.id);
//     res.send(JSON.stringify(sessionService.Get(id)));
// });

// app.post('/api/session/', (req, res) => {
//     console.log("here");
//     console.log("Posting Session: ");
//     console.log(req.body);

//     if(!sessionService.Validate(req.body)) {
//         res.sendStatus(400);
//     }

//     let id = sessionService.Set(req.body);
//     console.log(id);

//     res.end(id);
// });

// app.listen(port, () => {
//     console.log(`MTG-SET-REV-BACKEND listening at http://localhost:${port}`);
// });