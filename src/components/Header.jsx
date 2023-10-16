import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function Header() {
    return (

        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to={'/'}>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Real</span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex justify-between items-center'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch />
                </form>
                <ul className='flex justify-between gap-4 sm:gap-10'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        <Link to={'/sign-in'}>Signin</Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header