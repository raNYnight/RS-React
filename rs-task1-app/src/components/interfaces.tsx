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

export interface SearchPanelProps {
  value?: string;
}

export interface SearchPanelState {
  value: string;
}
