import {api} from '../utils/api';

export type EmployeeType = {
    id: Number,
    name: string,
    manager_id: Number | null
}

export const getEmployeeData = async () => {
    const { data } = await api.get<EmployeeType[]>('employees');
    return data;
};