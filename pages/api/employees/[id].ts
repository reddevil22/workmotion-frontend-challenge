import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Employees } from '.';
import { EmployeeData } from '../data/data';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'PATCH') {
        //@ts-ignore
        const employeeToUpdate = EmployeeData.find(employee => employee.id === parseInt(req.query.id))
        if (employeeToUpdate) {
            //@ts-ignore
            const i = EmployeeData.findIndex(employee => employee.id === parseInt(req.query.id))
            const updated: Employees = { ...employeeToUpdate, status: JSON.parse(req.body).status }
            EmployeeData[i] = updated;
            res.status(200).send({ employees: EmployeeData })
        }
        else {
            res.status(404)
            res.end()
            return
        }
    }
}