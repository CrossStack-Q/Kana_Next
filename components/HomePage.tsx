import React from 'react'
import DestinationCard from './DestinationCard'
import India from './Map/India'
import { useAppContext } from "@/store/state";

type Props = {}

function HomePage({ }: Props) {
  const { currentPage, setCurrentPage } = useAppContext();
  return (
    <div className='flex h-[94vh] items-center '>
      <div className='h-[94vh] md:flex-[0.6] flex-1 flex flex-col justify-between pt-12'>
        <p className='text-xl'>
          <span className='text-light-text font-semibold'>Hey `{`User`}`</span>
          <br />
          Good morning
        </p>
        <div className='md:text-5xl md:text-left text-center lg:text-6xl text-4xl font-semibold text-light-text'>
          <span className='text-light-primary leading-tight' >Where{" "}</span>
          <span className='leading-tight'>are you</span>
          <br className='hidden md:block' />
          <span className='leading-tight'>
            {" "}going to go?
          </span>
        </div>

        <div className='flex flex-col md:items-start items-center'>
          <div className='md:w-full md:max-w-fit max-w-xl rounded-full bg-white md:py-4 py-1 px-1 text-2xl'>
            <div className='flex items-center space-x-2'>
              <p className='ml-6 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-light-grey">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

              </p>
              <input placeholder='Destination or a hotel name' type="text" className='placeholder:text-light-grey w-full focus:outline-none' />
              <button onClick={()=>{setCurrentPage(2);}} className='bg-light-primary md:p-3 rounded-full md:-my-3  md:text-xl text-lg p-1 whitespace-nowrap text-white font-semibold'>
                Let's Go --{`>`}
              </button>
            </div>
          </div>
          <p className='text-light-text pl-8'>
            <span className='text-light-grey'>or{` `}</span>
            looking for a hotel nearby tonight?
          </p>
        </div>

        <div className='md:flex-none overflow-x-hidden flex-[0.8] '>
          <div className='flex justify-between px-4 pt-2'>
            <p>
              Top Destinations
            </p>
            <p>

              {`<--`}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {`-->`}
            </p>
          </div>
          <div className='flex max-w-[100vw] overflow-x-hidden'>
            <DestinationCard imageSrc='https://raw.githubusercontent.com/sairol/kana/main/dest/a.jpg' title="Mandir 1" hotelcount='1232' price="7800" />
            <DestinationCard imageSrc='https://raw.githubusercontent.com/sairol/kana/main/dest/b.jpg' title="Mandir 1" hotelcount='1232' price="7800" />
            <DestinationCard imageSrc='https://raw.githubusercontent.com/sairol/kana/main/dest/c.jpg' title="Mandir 1" hotelcount='1232' price="7800" />
            <DestinationCard imageSrc='https://raw.githubusercontent.com/sairol/kana/main/dest/d.jpg' title="Mandir 1" hotelcount='1232' price="7800" />
          </div>

        </div>

      </div>
      <div className="flex-[0.4] hidden justify-center relative w-full h-[90%] -mb-12 md:flex rounded-3xl ml-4 mt-6 bg-blue-500/50 ">
        <div className="absolute text-light-white font-semibold text-lg w-full flex-1 pt-8 flex-grow items-center flex flex-col">
          <p className=''>
            Your next vacation Destination
          </p>
          <p>
            is closer than you think .
          </p>
        </div>
        <India />
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-light-primary/40">
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
            </svg>
            <span className='text-base text-light-Lgrey'>Start Dates</span>

          </div>
          <div>
            {`--->`}
          </div>
          <div className='flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-light-primary/40">
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
            <span className='text-base text-light-Lgrey'>Guests</span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage