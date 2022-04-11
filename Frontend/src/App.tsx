import React, { useEffect, useState } from 'react';
import { AuthAPI } from './apis/auth.api';
import { RegisterDto } from './dto/auth/register.dto';

function App() {
  const [tasks, setTasks] = useState<RegisterDto[]>([])
  useEffect(()=>{
    async function fetchAll(){
      const resp = await AuthAPI.getAll();
      setTasks(resp);
    }
    fetchAll();
  }, [])
  return (
    <div className='w-screen h-screen bg-slate-700 flex justify-center items-center'>
      <ul>
        {
          tasks.map(task => {
            return <li>{task.email}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
