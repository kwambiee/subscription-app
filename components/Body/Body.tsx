'use client';
import React from 'react';
import "./Body.scss";
import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import { Images } from '@/constants';
import { useRouter } from 'next/navigation';

const features = {
    basic: ['Access to SUNFLO systems', '3 trials for other sizing tools'],
    premium: ['Unlimited access to sizing tools', 'Product Inventory and Pricing', 'Pump efficiency insights', 'System curve analysis', 'Wiring diagrams Included'],
    custom: ['Access to sizing solutions', 'Custom Logo Option', 'Live chart support', 'Personalized Selection', 'Discounted pricing option'],
}
const Body = () => {
    const navigator = useRouter();

    return (
        <div className='min-h-screen flex flex-col gap-[5rem] place-items-center justify-center pb-[6rem]'>
            <h2 className='text-[3rem] font-semibold italic'>Discover a plan tailored to your specific requirements</h2>

            <div>

            </div>

            <div className='flex gap-4 justify-center place-items-center '>
                <div className='hover:cardi cursor-pointer ease-in-out duration-300 rounded-md'>
                    <Card className="w-[24rem] py-6 h-[30rem] ">
                        <div className='flex flex-col place-items-center'>
                            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Basic
                            </h5>
                            <p className='text-3xl font-extrabold'>$ 0</p>
                            <p className='text-md font-light italic'>Your current plan</p>
                        </div>

                        <ul className='list-none  flex flex-col gap-4'>
                            {features.basic.map((item, index) => (
                                <li key={index} className='flex place-items-center gap-3'><Image src={Images.check} height={18} alt='check-icon' /> {item}</li>
                            ))}
                        </ul>

                        <div></div>
                    </Card>
                </div>

                <div className='cardi cursor-pointer ease-in-out duration-300 rounded-md relative'>
                    <div className="flex w-full justify-center bottom-[90%] place-items-center absolute">
                        <div className='rounded-full p-5 bg-black text-white font-bold'>Most Popular</div>
                    </div>

                    <Card className="w-[24rem] py-6 h-[30rem]">
                        <div className='flex flex-col place-items-center'>
                            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Premium
                            </h5>
                            <p className='text-3xl font-extrabold'>$ 10 <span className='text-sm font-light'>per user / per month</span></p>
                            {/* <p className='text-md= font-light italic'>Your current plan</p> */}
                        </div>

                        <ul className='list-none  flex flex-col gap-3'>
                            {features.premium.map((item, index) => (
                                <li key={index} className='flex place-items-center gap-3'><Image src={Images.check} height={18} alt='check-icon' /> {item}</li>
                            ))}
                        </ul>

                        <Button className='text-white font-extrabold' onClick={() => navigator.push('/premium')}>
                            <p>Get Started</p>
                            <Image src={Images.next} alt='next-icon' width={25} />
                        </Button>
                    </Card>
                </div>

                <div className='hover:cardi cursor-pointer ease-in-out duration-300 rounded-md'>
                    <Card className="w-[24rem] py-6 h-[30rem]">
                        <div className='flex flex-col place-items-center'>
                            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Custom
                            </h5>
                            {/* <p className='text-3xl font-extrabold'>$ 0</p> */}
                            <p className='text-md text-center font-light italic'>Elevate Your Experience with Tailored Subscriptions</p>
                        </div>

                        <ul className='list-none  flex flex-col gap-3'>
                            {features.custom.map((item, index) => (
                                <li key={index} className='flex place-items-center gap-3'><Image src={Images.check} height={18} alt='check-icon' /> {item}</li>
                            ))}
                        </ul>

                        <Button className='text-white font-extrabold'>
                            <p>Get Started</p>
                            <Image src={Images.next} alt='next-icon' width={25} onClick={() => navigator.push('/custom')} />
                        </Button>
                    </Card>
                </div>


            </div>


        </div>
    )
}

export default Body