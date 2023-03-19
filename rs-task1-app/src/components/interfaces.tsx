import { useLocation, useNavigate } from "react-router-dom";

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

export interface SearchPanelProps {}

export interface SearchPanelState {
  value: string;
}

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}
