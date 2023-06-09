"use client"



import React, { useState } from 'react'
import { useAppContext } from "@/store/state";


type Props = {}

function GuestPage({ }: Props) {

    const { region, setRegion } = useAppContext();

    const [count, setCount] = useState(0);



    return (
        <div className='flex h-[94vh] items-center '>
            <div className='h-[94vh] flex-[0.6] flex flex-col justify-evenly pl-12'>

                <div className='text-6xl font-semibold text-light-text'>
                    <span className='leading-tight'>
                        And...
                    </span>
                </div>

                <div className='space-y-4'>

                    <div className='flex space-x-2 items-center'>
                        <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                            we are&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <div className='w-fit rounded-full bg-white py-4 px-1 text-2xl'>
                            <div className='flex items-center space-x-2'>
                                <button onClick={() => {
                                    if (count == 0) return;
                                    setCount(count - 1);
                                }} className='rounded-full -my-3 text-xl text-white font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption ml-1" >
                                        <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </button>
                                <input placeholder='0' onChange={(e) => { setCount(parseInt(e.target.value)) }} type="text" className='placeholder:text-light-grey text-center focus:outline-none w-28 ' />
                                <button
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                    className=' rounded-full -my-3 text-xl text-white font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption mr-1">
                                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </button>
                            </div>
                        </div>
                        <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adults
                        </p>

                    </div>
                    <div className='flex space-x-2 items-center'>
                        <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                            with&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <div className='w-fit rounded-full bg-white py-4 px-1 text-2xl'>
                            <div className='flex items-center space-x-2'>
                                <button onClick={() => {
                                    if (count == 0) return;
                                    setCount(count - 1);
                                }} className='rounded-full -my-3 text-xl text-white font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption ml-1" >
                                        <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </button>
                                <input placeholder='0' onChange={(e) => { setCount(parseInt(e.target.value)) }} type="text" className='placeholder:text-light-grey text-center focus:outline-none w-28 ' />
                                <button
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                    className=' rounded-full -my-3 text-xl text-white font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption mr-1">
                                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </button>
                            </div>
                        </div>
                        <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children
                        </p>

                    </div>
                    <div className='flex space-x-2 items-center'>
                        <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                            And need&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <div className='w-fit rounded-full bg-white py-4 px-1 text-2xl'>
                            <div className='flex items-center space-x-2'>
                                <button onClick={() => {
                                    if (count == 0) return;
                                    setCount(count - 1);
                                }} className='rounded-full -my-3 text-xl text-white font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption ml-1" >
                                        <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </button>
                                <input placeholder='0' onChange={(e) => { setCount(parseInt(e.target.value)) }} type="text" className='placeholder:text-light-grey text-center focus:outline-none w-28 ' />
                                <button
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                    className=' rounded-full -my-3 text-xl text-white font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption mr-1">
                                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </button>
                            </div>
                        </div>
                        <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rooms
                        </p>

                    </div>

                </div>

                <div>
                    <div className='flex justify-between'>
                        <button className='text-xl font-semibold'>
                            &nbsp;{`<--- `}
                            Back
                        </button>
                        <button className='bg-light-primary text-light-white font-semibold py-4 px-10 rounded-full text-xl mr-8'>
                            Next
                        </button>

                    </div>


                </div>

            </div>
            <div className="flex-[0.4] flex flex-col bg-blue-400 justify-center items-center rounded-3xl ml-4 h-[100%]">
                <p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p>
                <p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p><p className='text-7xl text-light-white font-semibold'>
                    {region}
                </p>
            </div>
        </div>
    )
}

export default GuestPage