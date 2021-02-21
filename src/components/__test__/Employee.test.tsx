import React from 'react';
import Employees from '../Employees';
import { render, cleanup, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mocked } from 'ts-jest/utils';
import { getEmployeeData,EmployeeType } from '../../services/employeeApi';

afterEach(() => {
  cleanup;
  jest.resetAllMocks();
});

jest.mock('../../services/employeeApi');
const mockedAxios = mocked(getEmployeeData);

test('renders employee correctly', async() => {
  await act(async () => {
    const { getByTestId } = render(<Employees  />);
    await waitFor(() => [
      expect(getByTestId('employeeContainer')).toBeInTheDocument(),
    ]);
  });
});


  