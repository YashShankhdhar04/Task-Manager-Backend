const express=require('express')
const router =express.Router();



const {getAllTasks,createTask,getTask,updateTask,deleteTask}=require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
// router.route('/:id').get(getTask);
// router.route('/:id').get(updateTask);
// router.route('/:id').get(deleteTask);


module.exports=router