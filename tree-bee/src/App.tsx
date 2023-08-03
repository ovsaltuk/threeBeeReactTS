import React, { useEffect} from 'react';
import { getEmloyeesList } from './api/getEmployeeList';



function App() {
  useEffect(() => {
    getEmloyeesList.then(res => console.log(res));
  })

  return (
    <div className='container'></div>
  );
}

export default App;