import EmployeesCard from "../employees-card/employees-card";

import "./employees-list.css";
import { EmployeeData } from "components/interfaces";

const EmployeesList = ({ edata }: { edata: EmployeeData[] }) => {
  const elems = edata.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesCard
        key={id}
        id={id}
        {...itemProps}
      />
    );
  });
  return <div className="employees-list">{elems}</div>;
};

export default EmployeesList;
