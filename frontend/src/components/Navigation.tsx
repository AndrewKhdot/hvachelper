import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return ( 
        <nav className='flex justify-between items-center h-[50px] px-10 bg-blue-500 text-white'>
            <h3 className='font-bold'>HVAC-Helper</h3>

            <span>
                <Link to={'/'} className='mr-5'>Main</Link>
                <Link to={'/project'} className='mr-5'>Project</Link>
                <Link to={'/rooms'} className='mr-5'>Rooms</Link>
            </span>
        </nav>
    );
}

export default Navigation;