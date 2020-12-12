const ShoppingData = require('../models/shoppingList');

const getItems = async(req,res) => {
    try {
        const shoppingItems = await ShoppingData.find();

        res.status(200).json(shoppingItems);
    }

    catch(error) {
        res.status(404).json({message: error.message});
    }
}

const addItems = async(req,res) => {
        const item = req.body;

        const newPost = new ShoppingData(item);

        try {

            await newPost.save()

            res.status(201).json(newPost);
        }

        catch(error) {
            res.status(409).json({message: error.message});
        }
}


module.exports = { 
    getItems,
    addItems,
 };