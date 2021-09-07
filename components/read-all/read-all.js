const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const {connection, personagens, db} = require("../connection");

  //Middleware - especifica que é esse o import do router no index que queremos utilizar
  
  router.use(function timelog(req, res, next) {
    next();
    console.log("Time: ", Date.now());
  });

//[GET] GetAllPersonagens

router.get("/", async (req, res) => {
  await connection();
  const getPersonagensValidas = await personagens.find({}).toArray();
  res.send(getPersonagensValidas);
});

module.exports = router;
