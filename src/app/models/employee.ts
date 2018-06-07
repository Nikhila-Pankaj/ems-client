import { Department } from './department';
import { EmployeeAddress } from './employee-address';

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    address: EmployeeAddress;
    departmentId: number;
}