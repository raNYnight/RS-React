import EmployeesCard from '../employees-card/employees-card';
import { EmployeeData } from 'components/interfaces';

import './employees-list.css';

const EmployeesList = ({
  edata,
  onDelete,
}: {
  edata: EmployeeData[];
  onDelete: (id: number) => void;
}) => {
  const elems = edata.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesCard
        key={id}
        id={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
      />
    );
  });
  return <div className="employees-list">{elems}</div>;
};

export default EmployeesList;
