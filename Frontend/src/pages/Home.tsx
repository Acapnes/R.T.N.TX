import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthAPI } from '../apis/auth.api';
import { RegisterDto } from '../dto/auth/register.dto';

function HomePage() {

    const [search, setSearch] = useState('');

    function LogoButton({ alt, icon, path }: { alt: string, icon: string, path: string }) {
        return <button className='mx-2.5 hover:bg-slate-600 p-2 rounded-full  '>
            <Link to={path}><img src={icon} alt={alt} className='w-[3rem] h-[3rem]' /></Link>
        </button>
    }

    const [tasks, setTasks] = useState<RegisterDto[]>([])
    useEffect(() => {
        async function fetchAll() {
            const resp = await AuthAPI.getAll();
            setTasks(resp);
        }
        fetchAll();
    }, [])




    return <section className='w-screen h-screen bg-slate-400'>
        <div className="w-full h-[6rem] bg-purple-500">
            <div className='px-2 py-5 flex flex-row items-center'>
                <LogoButton path="/Home" icon='logo192.png' alt='Logo'></LogoButton>
                <button className='mr-5'>Anasayfa</button>
                <input
                    placeholder="Search"
                    className="py-3 pl-5 w-[72rem] text-md outline-none rounded-2xl"
                    type="text"
                    value={search}
                    required
                    onChange={(event) => setSearch(event.target.value)}
                />
                <LogoButton path="/Home" icon='logo192.png' alt='Logo'></LogoButton>
                <LogoButton path="/Home" icon='logo192.png' alt='Logo'></LogoButton>
                <LogoButton path="/Home" icon='logo192.png' alt='Logo'></LogoButton>
                <LogoButton path="/Home" icon='logo192.png' alt='Logo'></LogoButton>
            </div>
        </div>
        <div className="mx-10 my-5">
            <div style={{
                 backgroundImage: 'url("assets/sword.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  }} className="relative w-[24rem] h-[30rem] group">
                <div className='invisible group-hover:visible'>
                    <div className='p-5 flex justify-between'>
                        <button className="bg-red-500 rounded-xl px-5 py-2 font-bold text-white">Save</button>
                        <button className="bg-red-500 rounded-xl px-5 py-2 font-bold text-white">Save</button>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
}
export default HomePage;