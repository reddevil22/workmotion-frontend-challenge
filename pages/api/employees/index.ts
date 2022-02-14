import type { NextApiRequest, NextApiResponse } from 'next'
import { EmployeeData } from '../data/data'

export type Employees = {
    name: string;
    surname: string;
    id: number;
    status: 'added' | 'in-check' | 'approved' | 'active' | 'inactive'
}

export type Data = {
    employees: Employees[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const newEmployee = JSON.parse(req.body)
        const employees = [...EmployeeData, newEmployee]
        res.status(200).json({ employees: employees })
    }
    else {
        res.status(200).json({
            employees: EmployeeData
        })
    }
}
