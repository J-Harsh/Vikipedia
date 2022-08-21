import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

const Navbar = (props) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:jusitfy-between justify-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen' >
            <Link to="/">
                <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 text-gray-900'>Viki 📖</p>
            </Link>
            <button type='button' className='text-xl dark:bg-gray-500 text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-md dark:hover:shadow-white' onClick={()=> props.setDarkTheme(prevState=> !prevState)}>
                {props.darkTheme?"Light 💡" : "Dark🌙"}
            </button>
        </div>
        <Search/>
    </div>
  )
}

export default Navbar