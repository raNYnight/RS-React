export interface EmployeeData {
  name: string;
  status: string;
  salary: number;
  email: string;
  phone: number;
  promotion: boolean;
  image: string;
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

export interface EmployersAddingProps {
  handleGenderChange(newGender: string): void;
}
export interface EmployersAddingState {
  gender: string;
}

export interface GenderSwitcherProps {
  gender: string;
  onChange: (gender: string) => void;
}
