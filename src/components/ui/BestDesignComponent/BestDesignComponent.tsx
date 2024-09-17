import Image from 'next/image'
import { card } from './data'

export default function BestDesignComponent() {
  return (
    <div className='w-full h-full relative text-center'>
      <Image
        width={1440}
        height={1440}
        alt='bg'
        src={'/images/bestdesign_bg2.jpeg'}
      />
      <div className='absolute top-0 w-full'>
        <Image
          width={1920}
          height={1080}
          alt='bg'
          src={'/images/bestdesign_bg.png'}
          className='absolute top-0 w-full'
        />
        <div className='mt-[4vw]'>
          <Image
            className='mx-auto w-[15vw]'
            width={186}
            height={49}
            src='/images/logo2.png'
            alt='Picture of the author'
          />
        </div>
        <div>
          <Image
            className='mx-auto w-[15vw] mt-[-3.5vw]'
            width={1920}
            height={1080}
            src='/images/bestdesign_line.png'
            alt='Picture of the author'
          />
        </div>
        <div className='text-white font-bold text-[5vw] relative z-20'>
          BEST of the BEST
        </div>
        <div className='relative z-20'>
          <Image
            className='mx-auto w-[12.5vw] mt-[-0.5vw]'
            width={1920}
            height={1080}
            src='/images/bestdesign_star.png'
            alt='Picture of the author'
          />
        </div>
        <div className='mx-[8vw] grid grid-cols-3 gap-[2.5vw] mt-[9vw]'>
          {card.map(i => (
            <div
              key={i.id}
              className='bg-[#83838351] rounded-[16px] flex py-[2vw] px-[1vw]'
            >
              <div>
                <Image
                  className='w-[4vw] '
                  width={1080}
                  height={1920}
                  src='/images/bestdesign_star2.png'
                  alt='Picture of the author'
                />
              </div>
              <div className='text-start ml-0.5'>
                <div className='font-bold text-white mt-[0.5vw] text-[2.2vw]'>
                  {i.title}
                </div>
                <div className='font-bold text-white text-[2.4vw] mt-[-0.5vw]'>
                  {i.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mx-[7vw] m-[3vw] px-[3vw] pt-[3vw] pb-[2vw] bg-white rounded-[16px] grid grid-cols-2'>
          <div className='text-start ml-[1vw]'>
            <div className='font-bold text-primary text-[2.2vw]'>
              Notable Awards
            </div>
            <div className='font-bold uppercase text-[2.8vw]'>
              best website designs
            </div>
            <div className='mt-[2vw]'>
              <Image
                className='w-[18vw]'
                width={186}
                height={49}
                src='/images/logo2.png'
                alt='Picture of the author'
              />
            </div>
            <div className='text-gray-500 text-[1.8vw] mt-[1.5vw]'>
              Designed by{' '}
              <span className='font-semibold text-blue-800'>BIZDEV Studio</span>
            </div>
          </div>
          <div>
            <Image
              className=''
              width={1920}
              height={1080}
              src='/images/bestdesign_img.png'
              alt='Picture of the author'
            />
          </div>
        </div>
        <div className='flex justify-center text-white'>
          <div className='bg-gradient-to-r from-[#1D88F8] via-[#1D88F8] to-[#8BE2FF] rounded-full text-[1.8vw] p-[1px] transition-transform duration-300 ease-in-out hover:scale-105'>
            <div className='w-full cursor-pointer rounded-full bg-gray-900 px-[2vw] py-[0.6vw] text-white transition-colors duration-300 ease-in-out hover:bg-gray-700'>
              View all best design
            </div>
          </div>
          <div className='mx-[1.8vw] text-[2.5vw]'>or</div>
          <div className='cursor-pointer bg-gradient-to-r from-[#1D88F8] via-[#1D88F8] to-[#8BE2FF] rounded-full text-white text-[1.8vw] px-[2vw] py-[0.6vw] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
            Submit your design
          </div>
        </div>
      </div>
    </div>
  )
}
