import Image from 'next/image'
import React from 'react'

type Props = {
    imageSrc: String;
    title: String;
    hotelcount: String;
    price: String;

}

function DestinationCard({ imageSrc, title, hotelcount, price }: Props) {
    return (
        <div className='m-2 h-64 relative'>
            <div className='h-52 relative'>
                <Image alt="image" src={`${imageSrc}`} fill={true} className='relative rounded-xl' />
            </div>
            <p>{title}</p>
            <p>
                {hotelcount}hotel
                <span>Avg ${price}</span>
            </p>
        </div>
    )
}

export default DestinationCard;