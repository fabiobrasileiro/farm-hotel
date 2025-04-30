import { DoorOpen } from 'lucide-react'
import Emergency from '../../../public/assets/images/emergency.png'

import React from 'react'
import Image from 'next/image'

function Aside() {
  return (
    <aside className='h-screen  w-full text-white flex flex-col gap-6 '>
        <div className='flex flex-col gap-4 py-8 bg-gray-900  rounded-lg h-93 px-5'>
            <h3>
                Student Update
            </h3>
            <div className="w-full p-2 rounded-md bg-slate-800 flex items-center gap-4 px-8">
                <div className="rounded-full w-12 h-12 bg-gray-950 flex items-center justify-center">
                    F
                </div>
                <div className='text-xs'>
                    <p>Fábio Brasileiro</p>
                    <div className="flex items-center">
                    <DoorOpen size={16} />
                    <p>12:30</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-71 bg-gray-900 rounded-lg px-5 flex flex-col items-center justify-between py-6">
            <Image width={120}  src={Emergency} alt='Emergency' />
            <p className='text-xl text-center'>Press only in case of <br /> emergency</p>
            <button className='w-full h-16 bg-red-600 rounded-lg font-bold text-2xl'>EMERGENCY</button>
        </div>
    </aside>
  )
}

export default Aside
