import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/v1/employees'
class EmployeeService {

    getEmployees() {
        return axios.get(API_BASE_URL)
    }

    getEmployeesById(id) {
        return axios.get(API_BASE_URL + '/' + id)
    }

    createEmployee(employee) {
        return axios.post(API_BASE_URL, employee)
    }

    updateEmployee(id, employee) {
        return axios.put(API_BASE_URL + "/" + id, employee)
    }

    deleteEmployee(id) {
        return axios.delete(API_BASE_URL + "/" + id)
    }
}

export default new EmployeeService();
