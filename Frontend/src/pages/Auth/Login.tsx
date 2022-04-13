import React, { useEffect, useState } from "react";
import { AuthAPI } from "../../apis/auth.api";
import { RegisterDto } from "../../dto/auth/register.dto";

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const resp = await AuthAPI.Login({
            email,
            password,
        })
        if (resp) {
            if (resp["_id"] != null)
                alert("Logged in!");
            else
                alert("Wrong");
        }
    }

    return (
        <div className="relative h-screen w-screen bg-slate-500 flex justify-center items-center">
            <div className="relative flex justify-center items-center h-[30rem] w-[24rem] bg-yellow-300 flex-col rounded-2xl">
                <img src="logo192.png" alt="" className="absolute top-2 w-24 h-24" />
                <span className="py-4 text-3xl mt-10">Let's Login up!</span>
                <input
                    placeholder="E-mail"
                    className="mb-5 px-10 py-5 text-md outline-none rounded-2xl"
                    type="text"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    placeholder="Password"
                    className="mb-5 px-10 py-5 text-md outline-none rounded-2xl"
                    type="text"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={handleLogin} className=" m-4 px-8 py-4 rounded-2xl bg-purple-500 text-white">
                    Login!
                </button>
            </div>
            <span className="absolute bottom-0">@Copyright by <span className="font-bold">Acapnes</span> </span>
        </div>
    )
}

export { Login };