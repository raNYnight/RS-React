export interface EmployeeData {
  name: string;
  workType: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  date: string;
  promotion: boolean;
  imageURL: string;
  id: number;
}

export interface EmployeesCardProps extends EmployeeData {
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SearchPanelProps {
  value?: string;
}

export interface SearchPanelState {
  value: string;
}

export interface HomeProps {
  onDelete?: (id: number) => void;
}

export interface HomeState {
  data: EmployeeData[];
}

export interface EmployeesAddingProps {
  handleGenderChange?(newWorkType: string): void;
}
export interface EmployeesAddingState {
  employees: EmployeeData[];
  edata: EmployeeData;
  errors: {
    name: string;
    workType: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    date: string;
    imageURL: string;
  };
}

export interface WorkTypeSwitcherProps {
  workType: string;
  error: string;
  onChange: (workType: string) => void;
}
