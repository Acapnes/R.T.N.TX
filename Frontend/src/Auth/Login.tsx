import React, { useState } from "react";

const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [emailErrored, setEmailErrored] = useState(false);


    const [password, setPassword] = useState("");
    const [passwordErrored, setPasswordErrored] = useState(false);

    const handleLogin = () => {
        if (!email) {
            setEmailErrored(true);
        } else {
            setEmailErrored(false);
        }
        if (!password) {
            setPasswordErrored(true);
        } else {
            setPasswordErrored(false);
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
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                placeholder="Password"
                className="mb-4 px-8 py-4 text-md outline-none rounded-2xl"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={handleLogin} className=" m-4 px-8 py-4 rounded-2xl bg-purple-500 text-white">
                Login!
            </button>
        </div>
    )
}

export { Login };