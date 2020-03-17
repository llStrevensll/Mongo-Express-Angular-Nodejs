const Employee = require('../models/employee');

const employeeController = {};

employeeController.getEmployees = async(req, res) => {
    /*res.json({
        status: 'Employees goes here'
    });*/
    const employees = await Employee.find();
    res.json(employees);

}

employeeController.createEmployees = async(req, res) => {
    //req.body -> obtener data que envian - console.log(req.body);
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
}

employeeController.getEmployee = async(req, res) => {
    //req.params - parametros de la url
    const employee = await Employee.findById(req.params.id);
    res.json(employee);

}



employeeController.editEmployee = async(req, res) => {
    const { id } = req.params; // = req.params.id
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    console.log(employee);

    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true }); //set- modificar , new: true -> sino existe entonces lo crea
    res.json({ status: 'Employee update' });
}


employeeController.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({ status: 'Employee Deleted' });
}

module.exports = employeeController;