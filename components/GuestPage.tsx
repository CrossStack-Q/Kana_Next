"use client"



import React, { useState } from 'react'
import { useAppContext } from "@/store/state";


type Props = {}

function GuestPage({ }: Props) {

    const { currentPage, setCurrentPage , alone, setAlone } = useAppContext();

    const [count, setCount] = useState(0);



    return (
        <div className='flex h-[94vh] items-center m-2 pb-8 '>
            <div className='h-[94vh] flex-[0.6] flex flex-col justify-evenly md:pl-12 '>

                <div className='md:text-6xl text-5xl font-semibold text-light-text'>
                    <span className='leading-tight'>
                        And...
                    </span>
                </div>

                <div className='space-y-4'>

                    <div className='flex justify-between w-full md:px-12 -mx-2'>
                        <div>
                            <p className='text-light-text text-xl font-semibold whitespace-nowrap'>
                                I'm alone
                            </p>

                        </div>
                        <div>
                            <button>
                                {alone == false ?
                                    <svg onClick={() => setAlone(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-light-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg> :
                                    <svg onClick={() => { setAlone(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-light-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>




                                }

                            </button>
                        </div>
                    </div>

                    <div className={`space-y-4 ${alone == true ? 'hidden' : 'show'} `}>
                        <div className='flex max-w-md justify-between w-full space-x-2 items-center'>
                            <p className='text-light-text text-xl md:pl-8 font-semibold whitespace-nowrap'>
                                we are&nbsp;&nbsp;&nbsp;&nbsp;
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
                                    <input placeholder='0' onChange={(e) => { setCount(parseInt(e.target.value)) }} type="text" className='placeholder:text-light-grey text-center focus:outline-none  md:w-28 w-full ' />
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
                                 &nbsp;adults
                            </p>

                        </div>
                        <div className='flex max-w-md justify-between w-full space-x-2 items-center'>
                            <p className='text-light-text md:pl-8 text-xl font-semibold whitespace-nowrap'>
                                with  &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                            <div className='w-fit rounded-full bg-white py-4 px-1 text-2xl'>
                                <div className='flex items-center space-x-2'>
                                    <button onClick={() => {
                                        if (count == 0) return;
                                        setCount(count - 1);
                                    }} className='rounded-full -my-3 text-xl text-white font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-full bg-light-background text-light-caption ml-1" >w-28
                                            <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                        </svg>


                                    </button>
                                    <input placeholder='0' onChange={(e) => { setCount(parseInt(e.target.value)) }} type="text" className='placeholder:text-light-grey text-center focus:outline-none md:w-28 w-full ' />
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
                                 &nbsp;children
                            </p>

                        </div>
                        <div className='flex max-w-md justify-between w-full space-x-2 items-center'>
                            <p className='text-light-text md:pl-8 text-xl font-semibold whitespace-nowrap'>
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
                                    <input placeholder='0' onChange={(e) => { setCount(parseInt(e.target.value)) }} type="text" className='placeholder:text-light-grey text-center focus:outline-none  md:w-28 w-full ' />
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
                                 &nbsp;rooms
                            </p>

                        </div>
                    </div>

                </div>

                <div>
                    <div className='flex justify-between'>
                        <button onClick={()=>{setCurrentPage(2);}} className='text-xl font-semibold'>
                            &nbsp;{`<--- `}
                            Back
                        </button>
                        <button onClick={()=>{setCurrentPage(4);}} className='bg-light-primary text-light-white font-semibold py-4 px-10 rounded-full text-xl mr-8'>
                            Next
                        </button>

                    </div>


                </div>

            </div>

            <div className="flex-[0.4] hidden justify-center relative w-full h-[100%] md:flex bg-light-primary rounded-3xl ml-4 mt-6">
                <div className="absolute text-light-white font-semibold text-lg w-full flex-1 pt-8 flex-grow items-center flex flex-col">
                    <p></p>
                </div>
                {/* 
        
        
        
        
        */}

                <div className="flex-[0.4] flex flex-col p-2 bg-light-primary text-light-white justify-center items-center rounded-3xl ml-4 ">
                    <p className='text-4xl whitespace-nowrap'>
                        It's Gonna Be
                    </p>
                    <p className='text-4xl whitespace-nowrap font-bold p-2'>
                        Amazing Journey!
                    </p>
                    <p className='whitespace-nowrap p-3 text-light-Lgrey'>
                        Explore Unique Hotel Experience with 800+<br/>
                        <span>Articles On <span className='font-semibold text-light-white'>Trivago Magazine</span> </span>
                    </p>
                </div>





                {/* 
        
        
        */}
                <div className="absolute bottom-0 text-light-white font-semibold text-3xl w-full flex-1 pb-8 flex-grow justify-center items-center flex">
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                        </svg>
                        <span className='text-base'>Location</span>

                    </div>
                    <div>
                        {`--->`}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-light-white">
                            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                        </svg>
                        <span className='text-base text-light-Lgrey'>Start Dates</span>

                    </div>
                    <div>
                        {`--->`}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-light-white">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                        <span className='text-base text-light-Lgrey'>Guests</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestPage