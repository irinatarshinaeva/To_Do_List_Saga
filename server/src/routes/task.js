const { Router } = require('express');
const taskController = require('../controllers/task');

const router = Router();

router.get('/', taskController.getTask);

router.post('/', taskController.createTask);

router.patch('/:id', taskController.changeTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;
