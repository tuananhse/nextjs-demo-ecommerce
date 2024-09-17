'use client'

import Image from 'next/image'

export default function SaveTimeCart(_prop: Readonly<SaveTimeCartPropType>) {
  return (
    <div className='flex flex-col w-full bg-white px-5 sm:px-10 py-3 sm:py-6 rounded-xl shadow-xl hover:shadow-2xl'>
      <div className='font-semibold text-[2vw] flex justify-center'>
        {_prop.text}
      </div>
      <div className='text-[1.5vw] flex items-center justify-center content-end text-center'>
        {_prop.subText}
      </div>
      <div className='flex justify-center'>
        <Image
          src={'/images/findAgency.png'}
          width={278}
          height={258}
          alt='Find agency'
        />
      </div>

      <button
        onClick={_prop.onClick}
        className='h-[30px] sm:h-[30px] self-center px-2 sm:px-8 mt-10 justify-center items-center inline-flex py-2 sm:py-6 text-xs sm:text-3xl font-semibold text-white bg-gradient-to-r from-[#1D88F8] to-[#9273FF] rounded-xl'
      >
        {_prop.buttonText}
      </button>
    </div>
  )
}

export class SaveTimeCartPropType {
  text?: string
  subText?: string
  onClick?: () => void
  buttonText?: string
}
