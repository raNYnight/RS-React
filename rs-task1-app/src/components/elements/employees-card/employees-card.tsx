import { EmployeesCardProps } from 'components/interfaces';
import { Component, ReactNode } from 'react';
import './employees-card.css';

class EmployeesCard extends Component<EmployeesCardProps> {
  constructor(props: EmployeesCardProps) {
    super(props);
  }
  render(): ReactNode {
    let classes = 'employee-card';
    const { promotion, name, status, salary, email, phone, image, onDelete } = this.props;
    if (promotion) classes += ' promoted';
    return (
      <li className={classes}>
        <span className="employee-name">{name}</span>
        <img
          src={image}
          alt="img"
          width={100 + 'px'}
          height={100 + 'px'}
        />
        <span className="employee-status">{status}</span>
        <span className="employee-salary">{salary}$</span>
        <span className="employee-email">{email}</span>
        <span className="employee-phone">+{phone}</span>
        <span className="employee-promotion">Promotion: {promotion ? 'yes' : 'no'}</span>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={onDelete}
        >
          Fire employee
        </button>
      </li>
    );
  }
}
export default EmployeesCard;
