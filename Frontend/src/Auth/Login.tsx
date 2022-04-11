import React, { useEffect, useState } from "react";
import { AuthAPI } from "../apis/auth.api";
import { RegisterDto } from "../dto/auth/register.dto";

const Login: React.FC = () => {

    const [tasks, setTasks] = useState<RegisterDto[]>([])
    useEffect(()=>{
      async function fetchAll(){
        const resp = await AuthAPI.getAll();
        setTasks(resp);
      }
      fetchAll();
    }, [])

    const [email, setEmail] = useState('');
    const [emailErrored, setEmailErrored] = useState(false);


    const [age, setAge] =  useState(Number);
    const [passwordErrored, setPasswordErrored] = useState(false);

    const handleLogin = async () => {
        const resp = await AuthAPI.Login({
            email,
            age,
        })      
        if(resp)
        {
            if(resp["_id"]!=null)
                alert("Logged in!");
            else
                alert("Wrong");
        }
    }

    return (
        <div className="h-screen w-screen bg-slate-500 flex justify-center items-center flex-col">
            <span className="py-4 text-2xl text-white">Let's Login up!</span>
            <input
                placeholder="E-mail"
                className="mb-4 px-8 py-4 text-md outline-none rounded-2xl"
                type="text"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                placeholder="Password"
                className="mb-4 px-8 py-4 text-md outline-none rounded-2xl"
                type="number"
                value={age}
                required
                onChange={(event) => setAge(event.target.valueAsNumber)}
            />
            <button onClick={handleLogin} className=" m-4 px-8 py-4 rounded-2xl bg-purple-500 text-white">
                Login!
            </button>
        </div>
    )
}

export { Login };