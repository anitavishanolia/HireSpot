
import React, { useState } from 'react';
 import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
 import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
     const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className='text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-20 text-white'>
            <div className='flex flex-col gap-6 my-10'>
                <span className='mx-auto px-5 py-2 rounded-full bg-white text-purple-600 font-semibold shadow-lg'>Your Ultimate Career Platform</span>
                <h1 className='text-6xl font-bold leading-tight'>
                    Search, Apply & <br />
                    Land Your <span className='text-yellow-400'>Dream Job</span>
                </h1>
                <p className='text-lg max-w-md mx-auto'>
                    Discover your path to success with opportunities crafted for you.
                </p>
                <div className='flex w-[50%] shadow-xl border border-gray-300 pl-5 rounded-full items-center gap-3 bg-white mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream job...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-gray-800 py-3 px-2 rounded-l-full'
                    />
                    <button 
                        onClick={searchJobHandler} 
                        className="rounded-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-purple-800 font-semibold">
                        <Search className='h-5 w-5' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
