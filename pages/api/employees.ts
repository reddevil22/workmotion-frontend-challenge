import type { NextApiRequest, NextApiResponse } from 'next'

export type Employees = {
    name: string;
    surname: string;
    id: number;
    status: 'added' | 'in-check' | 'approved' | 'active' | 'inactive'
}

type Data = {
  employees: Employees[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ employees: [
      {
          id: 1,
          name: 'Susan',
          surname: 'White',
          status: 'added'
      },
      {
        id: 2,
        name: 'Alex',
        surname: 'Grey',
        status: 'in-check'
    },
    {
        id: 3,
        name: 'John',
        surname: 'Blue',
        status: 'active'
    },
    {
        id: 4,
        name: 'Gary',
        surname: 'Green',
        status: 'inactive'
    },
  ] })
}
