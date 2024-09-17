'use client'
import { images } from '@/images/images'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'use-intl'

export default function Banner() {
  const t = useTranslations('home')

  return (
    <div className={'bg-cover bg-center flex items-center justify-center'}>
      <div>
        <Image
          src={images.headerBackground}
          className='w-full sm:w-screen h-[70vw] sm:h-[450px] xl:h-[550px]'
          height={550}
          alt='banner'
          quality={100}
        />
        <div
          className={
            'absolute inset-20 flex justify-center sm:items-center space-x-2 h-[70vw] sm:h-[450px] xl:h-[550px]'
          }
        >
          <div className='flex flex-col items-center space-y-[10px] sm:space-y-[20px] xl:space-y-[50px]'>
            <div className='flex-col text-center'>
              <span className='text-[5vw] sm:text-[64px] text-white font-semibold'>
                {t('banner.title')}
              </span>
              <p className='text-white font-normal text-[4vw] sm:text-[24px] max-w-[85vw]'>
                {t('banner.title_content')}
              </p>
              <div></div>
            </div>
            <div className='flex justify-end items-center min-w-[75vw]'>
              <input
                className={
                  'flex-1 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-xl h-[32px] sm:h-[42px] xl:h-[52px] rounded-full mr-4 sm:rounded-full border-none placeholder:text-[12px] sm:placeholder:text-[20px]'
                }
                placeholder={t('banner.banner_placeholder')}
              />
              <div className='absolute'>
                <button
                  className={
                    'w-[40px] sm:w-[60px] xl:w-[70px] h-[40px] sm:h-[60px] xl:h-[70px]  text-center flex items-center justify-center bg-primary text-white rounded-full transition-transform duration-200 hover:bg-white hover:text-primary hover:scale-110'
                  }
                >
                  <Search />
                </button>
              </div>
            </div>
            <div className='flex flex-row space-x-2 sm:space-x-7 pt-2 sm:pt-3 xl:pt-4'>
              <button className='text-sm sm:text-lg xl:text-2xl text-white font-extrabold h-[32px] sm:h-[42px] xl:h-[52px] transition ease-in-out duration-75 cursor-pointer bg-primary px-2 sm:px-4 bg-gradient-to-r from-[#1D88F8] via-[#1D88F8] to-[#8BE2FF] hover:from-[#0A74DA] hover:via-[#0A74DA] hover:to-[#67D1FF] hover:scale-105 focus:ring-1 focus:outline-none focus:ring-primary dark:focus:ring-blue-800 text-center'>
                {t('banner.banner_get_stated')}
              </button>

              <button className='text-sm sm:text-lg xl:text-2xl text-white font-extrabold h-[32px] sm:h-[42px] xl:h-[52px] transition ease-in-out duration-75 cursor-pointer px-2 sm:px-4 focus:ring-1 focus:outline-none focus:ring-primary dark:focus:ring-blue-800 text-center rounded-none border-2 border-primary hover:bg-primary hover:text-white hover:border-transparent'>
                {t('banner.banner_contact_us')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
