import styles from '../../styles/Wizard.module.css'
import { Employees } from '../api/employees';

interface IWizard {
    employees: Employees[];
    onClick: (e: unknown, employee: Employees) => void;
}

export function Wizard({ employees, onClick }: IWizard) {
    //@ts-ignore
    return (
        <>
            {employees.map((employee, index) => {
                return (
                    <div key={index} className="container">

                        <h3>{`${employee.name} ${employee.surname}`}</h3>
                        <div className={styles.wizard}>
                            {['added', 'in-check', 'approved', 'active', 'inactive'].map((status, index) => {
                                return <a key={index} className={`${styles.wizard} ${status === employee.status ? styles.current : ''}`}
                                    onClick={(e) => onClick(e, employee)}>
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