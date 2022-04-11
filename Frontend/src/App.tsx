import React, { useEffect, useState } from 'react';
import { TaskAPI } from './apis/task.api';
import { TaskDTO } from './dto/task.dto';

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])
  useEffect(()=>{
    async function fetchAll(){
      const resp = await TaskAPI.getAll();
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
