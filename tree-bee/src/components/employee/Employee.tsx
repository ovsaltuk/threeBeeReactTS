import { IEmployee } from "../../models/IEmployee";
import { BtnPrimary } from "../buttons/Btn_primary";
import { BtnTransparent } from "../buttons/Btn_transparent";
import './style.scss';

interface EmployeeProps {
  employee: IEmployee
}

export function Employee({ employee }: EmployeeProps) {
  return (
    <div className="employee">
      <img src={employee.avatar} alt={employee.name} className="employee__img"/>
      <h3 className="eployee__title">{employee.name}</h3>
      <span className="eployee__specialization" dangerouslySetInnerHTML={{__html: employee.specialization}}></span>
      <div className="employee__btn-wrapper">
        <BtnPrimary title="Book"/>
        <BtnTransparent title="More..."/>
      </div>
    </div>
  )
}