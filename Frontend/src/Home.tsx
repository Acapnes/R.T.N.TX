import React from 'react';
import { Link } from "react-router-dom";

function Click({ name, icon, path }: { name: string, icon: string ,path:string}) {
    return <Link to={path}><button className='absolute bottom-1 flex items-center justify-center bg-purple-500 px-6 py-2 rounded-xl'>
        <span className='iconify' data-icon="ci:settings-filled"></span>
        <span className='pl-5'>Click!</span>
    </button></Link>
}

function HomePage() {
    return <section className='w-screen h-screen bg-blue-100 flex justify-center items-center'>
        <div className='relative w-[16rem] h-[16rem] bg-yellow-200 items-center flex flex-col justify-center'>
            <div className='relative flex flex-col items-center'>
                <img src="/assets/kermit.jpg" alt="" className="2-32 h-32 rounded-xl" />
                <p className=''>Test</p>

            </div>
            <Click path="/About" name="test" icon='test'></Click>
        </div>

    </section>
}
export default HomePage;