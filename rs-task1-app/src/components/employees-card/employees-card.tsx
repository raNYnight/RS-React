import { EmployeeData } from "components/interfaces";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./employees-card.css";

const EmployeesCard = (props: EmployeeData) => {
  let classes: string = "employee-card";
  if (props.promotion) classes += " promoted";
  return (
    <li className={classes}>
      <span className="employee-name">{props.name}</span>
      <img
        src={props.image}
        alt="img"
        width={100 + "px"}
        height={100 + "px"}
      />
      <span className="employee-status">{props.status}</span>
      <span className="employee-salary">{props.salary}$</span>
      <span className="employee-email">{props.email}</span>
      <span className="employee-phone">+{props.phone}</span>
      <span className="employee-promotion">Promotion: {props.promotion ? "yes" : "no"}</span>
      <button
        type="button"
        className="btn btn-outline-light"
      >
        Promote
      </button>
    </li>
  );
};

export default EmployeesCard;
