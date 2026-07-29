const express = require ('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message: 'Liste des villes'});
});

module.exports =router;
