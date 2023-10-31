import React from 'react'
import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import { Images } from '@/constants';

interface Props {

}

const CardComponet = (props: Props) => {
  return (
    <Card className="w-[22rem] py-6 h-[30rem]">
    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Basic
    </h5>

    <Button className='text-white font-extrabold'>
        <p>Get Started</p>
        <Image src={Images.next} alt='next-icon' width={25} />
    </Button>
</Card>
  )
}

export default CardComponet