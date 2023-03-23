export interface EmployeeData {
  name: string | null;
  status: string;
  salary: number;
  email: string;
  phone: number;
  promotion: boolean;
  image: string;
  id: number;
}

export interface EmployeeData1 {
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
  edata: EmployeeData1;
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
