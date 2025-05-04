import { DoorOpen } from 'lucide-react'
import Emergency from '../../../public/assets/images/emergency.png'

import React from 'react'
import Image from 'next/image'
import Container from './Container'

import  GuestUpdateCard  from './GuestUpdateCard'


function Aside() {
    return (
        <aside className='h-screen  w-full text-white flex flex-col gap-6 '>
            <Container title='Student Update' px="px-2" py="py-4" col='flex-col'>
              <GuestUpdateCard name='Fábio Brasileiro' initial='F' time='12:30' />
            </Container>

            <div className="w-full h-71 bg-gray-900 rounded-lg px-5 flex flex-col items-center justify-between py-6">
                <Image width={120} src={Emergency} alt='Emergency' />
                <p className='text-xl text-center'>Press only in case of <br /> emergency</p>
                <button className='w-full h-16 bg-red-600 rounded-lg font-bold text-2xl'>EMERGENCY</button>
            </div>
        </aside>
    )
}

export default Aside
