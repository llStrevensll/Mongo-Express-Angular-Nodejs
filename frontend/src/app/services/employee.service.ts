import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  // Modelo Employee
  selectedEmployee: Employee;
  employees: Employee[]; // Arreglo de empleados

  // Constante URL_API
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
   }


  // Obtener Empleados
  getEmployees() {
    return this.http.get(this.URL_API);
  }

  // Agregar empleado
  postEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  // Actualizar empleado
  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  // Eliminar empleado
  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
