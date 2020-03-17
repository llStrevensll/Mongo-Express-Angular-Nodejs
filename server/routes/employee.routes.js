const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');


router.get('/', employeeController.getEmployees); //quieren obtener empleados
router.post('/', employeeController.createEmployees); //quieren guardar empleados
router.get('/:id', employeeController.getEmployees); //quiere el empleado por el id
router.put('/:id', employeeController.editEmployee); //put para actualizar
router.delete('/:id', employeeController.deleteEmployee); //eliminar empleado por id


module.exports = router;