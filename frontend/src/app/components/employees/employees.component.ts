import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  // Adicionar Empleado
  addEmployee(form: NgForm){
    // console.log(form.value);
    // Si existe id es editar - sino es guardar
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Update Successfuly'}); // mensaje toast
          this.getEmployees(); // pedir empleados nuevamente
        });
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Save Successfuly'}); // mensaje toast
        this.getEmployees(); // pedir empleados nuevamente
      });
    }
  }

  // Obtener Empleados
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[]; // Llenar arreglo de empleados
        console.log(res);
      });
  }

  // Editar Empleado
  editEmployee(employee : Employee){
    this.employeeService.selectedEmployee = employee;
  }

  // Eliminar Empleado
  deleteEmployee(_id: string){
    if(confirm('Are you sure, tou want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
      .subscribe(res => {
        this.getEmployees();
        M.toast({html: 'Deleted sucessfully'});
      });
    }
  }

  // Resetar Form
  resetForm(form?: NgForm){
    if(form){ // si existe formulario resetear
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
