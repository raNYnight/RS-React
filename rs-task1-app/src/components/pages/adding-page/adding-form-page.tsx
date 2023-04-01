import { useState } from 'react';

import FormComponent from './form';
import EmployeesList from '../../elements/employees-list/employees-list';
import { EmployeeData } from '../../interfaces';

import './adding-page.css';

const EmployeesAddingFormPage = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);

  const handleEmployeeAdd = (employee: EmployeeData) => {
    setEmployees([...employees, employee]);
    localStorage.setItem('addedData', JSON.stringify([...employees, employee]));
  };

  const handleDelete = (id: number) => {
    const newData = employees.filter((employee) => employee.id !== id);
    setEmployees(newData);
    localStorage.setItem('addedData', JSON.stringify(newData));
  };

  return (
    <div className="adding-page">
      <h2>Add new employee</h2>
      <FormComponent onEmployeeAdd={handleEmployeeAdd} />
      <EmployeesList
        edata={employees}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default EmployeesAddingFormPage;
