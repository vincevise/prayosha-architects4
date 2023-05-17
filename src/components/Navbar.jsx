import React from 'react'
import { logoImg } from '../App'
import { Link } from 'react-router-dom'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='p-3 flex items-center justify-between fixed w-full bg-black z-10 font-poppins'>
        <div className='flex uppercase gap-3'>
            <img src={logoImg} className='w-16' alt="" />
            <p className='flex flex-col '>
                {/* <span className='text-[20px]'>
                    Prayosha 
                </span>
                <span className='text-lg'>
                    Architects
                </span> */}
            </p>
        </div>
        <div className='absolute w-fit mx-auto  inset-x-0 flex gap-10  uppercase text-md '>
            <Link to={'/'} className={`hover:border-b hover:border-white`}>Home</Link>
            <Link to={'/architecture'} className='hover:border-b hover:border-white'>Architecture</Link>
            <Link to={'/interior'} className='hover:border-b hover:border-white'>Interior</Link>
            <Link to={'/about'} className='hover:border-b hover:border-white'>About</Link>
            <Link to={'/contact'} className='hover:border-b hover:border-white'>Contact</Link>
        </div>
        <div className='text-white flex gap-2 pr-4'>
            <a href="https://www.instagram.com/prayoshaarchitects/?hl=en" target="_blank"><AiFillInstagram size={25}/></a>
            <a href="https://www.facebook.com/pra.architects/" target="_blank">
                <AiFillFacebook size={25}/>
            </a>
            <a href="https://www.linkedin.com/company/prayosha-architects/about/" target="_blank">
                <AiFillLinkedin size={25}/>
            </a>
            
        </div>
    </div>
  )
}

export default Navbar