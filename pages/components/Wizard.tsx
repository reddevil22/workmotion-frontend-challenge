import styles from '../../styles/Wizard.module.css'
import { Employees } from '../api/employees'

interface IWizard {
    employees: Employees[]
}

export function Wizard({ employees }: IWizard) {
    return (
        <>
            {employees.map(employee => {
                return (
                    <div className="container">

                        <h3>{`${employee.name} ${employee.surname}`}</h3>
                        <div className={styles.wizard}>
                            {['added', 'in-check', 'approved', 'active', 'inactive'].map(status => {
                                return <a className={`wizard ${status === employee.status ? 'current' : ''}`}>
                                    {status}
                                </a>
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    )
}