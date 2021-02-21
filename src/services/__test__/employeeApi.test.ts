import { EmployeeData } from "../../fixtures/Employee";
import { getEmployeeData } from "../../services/employeeApi";
import axios from "axios";
import { api } from "../../utils/api";

jest.mock("../../utils/api");
const mockedAxios = api as jest.Mocked<typeof axios>;

describe("Employees Api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getEmployee functionality", () => {
    it("requests and gets employee data from Api", async () => {
      mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: EmployeeData })
      );

      const entity = await getEmployeeData();
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(EmployeeData);
    });
  });
});
