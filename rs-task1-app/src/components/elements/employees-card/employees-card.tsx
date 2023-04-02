import { EmployeeData } from 'components/interfaces';
import './employees-card.css';

export interface EmployeesCardProps extends EmployeeData {
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}
function EmployeesCard(props: EmployeesCardProps) {
  const { name, worktype, email, phone, title, salary, date, promotion, image, onDelete } = props;
  let classes = 'employee-card';
  if (promotion) classes += ' promoted';

  return (
    <li className={classes}>
      <span className="employee-name">{name}</span>
      <img
        src={image as string}
        alt="img"
        width={100 + 'px'}
        height={100 + 'px'}
      />
      <span className="employee-title">{title}</span>
      <span className="employee-work-type">{worktype}</span>
      <span className="employee-salary">{salary}$</span>
      <span className="employee-date">{date} </span>
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
export default EmployeesCard;
