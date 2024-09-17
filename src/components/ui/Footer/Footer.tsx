import Link from 'next/link'
import { images } from '@/images/images'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='mx-auto max-w-[1920px] py-6 sm:py-12 px-3 sm:px-6 bg-gradient-to-b from-[#1D88F8] to-[#9273FF]'>
      <div className='grid grid-cols-2 gap-4 sm:gap-8  text-white transition-colors duration-150 lg:grid-cols-12'>
        <div className='flex flex-1 col-span-1 lg:col-span-5'>
          <ul className='flex flex-col space-y-4'>
            <li>
              <Link
                href='/'
                className='flex items-center flex-initial font-bold md:mr-24'
              >
                <span className='mr-2'>
                  <Image
                    src={images.logo}
                    width={400}
                    height={104}
                    alt='image'
                    className='w-[21vw] h-[5.5vw]'
                  />
                </span>
              </Link>
            </li>
            <li className='flex flex-row space-x-4 items-center'>
              <Image
                src='/images/telephone.png'
                alt='Logo'
                width={40}
                height={40}
                className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                style={{ objectFit: 'contain' }}
              />
              <p className=' text-white text-sm sm:text-xl transition duration-150 ease-in-out hover:text-zinc-200'>
                (+84) 96 805 5907
              </p>
            </li>
            <li className='flex flex-row space-x-4 items-center'>
              <Image
                width={40}
                height={40}
                src='/images/mail.png'
                alt='maill'
                className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                style={{ objectFit: 'contain' }}
              />
              <p className=' text-white  text-sm sm:text-xl transition duration-150 ease-in-out hover:text-zinc-200'>
                info@bizdevint.com
              </p>
            </li>
            <li className='flex flex-column grid-rows-1 space-x-4 pl-6'>
              <div className='cursor-pointer'>
                <Image
                  src='/images/social.png'
                  alt='Logo'
                  width={40}
                  height={40}
                  className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className='cursor-pointer'>
                <Image
                  width={40}
                  height={40}
                  src='/images/facebook.png'
                  alt='Logo'
                  className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className='cursor-pointer'>
                <Image
                  width={40}
                  height={40}
                  src='/images/linkedin.png'
                  alt='Logo'
                  className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className='cursor-pointer'>
                <Image
                  width={40}
                  height={40}
                  src='/images/youtube.png'
                  alt='Logo'
                  className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className='cursor-pointer'>
                <Image
                  width={40}
                  height={40}
                  src='/images/instagram-logo.png'
                  alt='Logo'
                  className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className='flex flex-1 col-span-1 lg:col-span-2'>
          <ul className='flex flex-col flex-initial md:flex-1'>
            <li className='py-0 sm:py-3 md:py-0 pb-0 md:pb-4 sm:pb-4'>
              <p className='text-sm sm:text-2xl font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200'>
                About Us
              </p>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Team story
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Our service
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Contact us
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Registration Process
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 lg:col-span-2'>
          <ul className='flex flex-col flex-initial md:flex-1'>
            <li className='py-0 sm:py-3 md:py-0 pb-0 md:pb-4 sm:pb-4'>
              <p className='text-sm sm:text-2xl font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200'>
                For business
              </p>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Agencies Categories
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Agency Ranking
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                TrendsArticles
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 lg:col-span-3'>
          <ul className='flex flex-col flex-initial md:flex-1'>
            <li className='py-0 sm:py-3 md:py-0 pb-0 md:pb-4 sm:pb-4'>
              <p className='text-sm sm:text-2xl font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200'>
                For agencies
              </p>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Benefits Of Listing With Us
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Submit An Agency
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Sponsorship
              </Link>
            </li>
            <li className='py-0 sm:py-3 md:py-0 pb-0 sm:pb-4 md:pb-4'>
              <Link
                href='/'
                className='text-white text-xs sm:text-base transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Newest Agencies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid flex-col items-center justify-between pt-4 sm:pt-12 md:flex-row lg:grid-cols-12'>
        <div className='lg:col-span-5'>
          <span className='text-white text-xs sm:text-base'>
            &copy; BIZDEV {new Date().getFullYear()}, All rights reserved.
          </span>
        </div>
        <div className='flex  lg:col-span-7 items-center flex-row space-x-6'>
          <Link href='/'>
            <span className='text-white underline text-xs sm:text-base'>
              Site map
            </span>
          </Link>
          <Link href='/'>
            <span className='text-white underline text-xs sm:text-base'>
              Temp of Use IP
            </span>
          </Link>
          <Link href='/'>
            <span className='text-white underline text-xs sm:text-base'>
              Privacy Proxy
            </span>
          </Link>
          <Link href='/'>
            <span className='text-white underline text-xs sm:text-base'>
              Accessibility Statement
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
