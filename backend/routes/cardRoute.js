
const { Router } = require('express');
const cardController = require('../controllers/cardControllers');
const router = Router();

router.get('/items', itemController.get_items);
router.post('/items',itemController.post_item);
router.delete('/items/:id',itemController.delete_item);