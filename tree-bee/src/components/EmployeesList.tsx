import { Employee } from "./employee/Employee";
import { getEmloyeesList } from "../api/getEmployeeList";
import { useEffect, useState } from "react";
import { IEmployee } from "../models/IEmployee";


export function EmployeesList() {
  const [list, setList] = useState<IEmployee[]>([]);

  async function fetchData() {
    const response = await getEmloyeesList();
    console.log(response);
    setList(response)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      { list.map(employeeItem => <Employee key={employeeItem.id} employee={employeeItem}/>)}
    </>
  );
}