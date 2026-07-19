const express = require ('express');

const router = express.Router();

// Récupérer tous les artisans
router.get('/',(req,res)=>{
    res.json({message: 'Liste des artisans'});
});

//Récupérer un artisan
router.get('/:id',(req,res)=>{
    res.json({
        message:`Artisan ${req.params.id}`
    });
});

//Ajouter un artisan
router.post('/',(req,res)=>{
    res.json({
        message:'Créer un artisan',
        artisan:req.body
    });
});

//Modifier un artisan
router.put('/:id',(req,res)=>{
    res.json({
        message:`Modifier l'artisan ${req.params.id}`,
        artisan:req.body
    });
});

//Supprimer un artisan
router.delete('/:id',(req,res)=>{
    res.json({
        message : `Supprimer l'artisan ${req.params.id}`
    });
});

module.exports =router;

