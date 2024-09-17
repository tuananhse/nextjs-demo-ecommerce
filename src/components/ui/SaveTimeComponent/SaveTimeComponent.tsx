'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SaveTimeCart from './SaveTimeCart'

export default function SaveTimeComponent() {
  const t = useTranslations('home')

  const handleSubmitClick = () => {
    console.log('Button clicked')
  }
  const handleConnectClick = () => {
    console.log('Button clicked')
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex items-center mx-2 xl:mx-8 justify-between bg-gradient-to-b from-[#248EF8] to-[#86DFFF] py-0 xl:py-2 rounded-lg p-1 xl:p-2'>
        <Image
          src={'/images/findAgency2.png'}
          width={150}
          height={146}
          alt='left'
          className='w-[60px] h-[56px] sm:w-[150px] sm:h-[146px]'
        />
        <span className='text-white font-bold text-sm text-center md:text-[24px] xl:text-[50px]'>
          {t('save_time.title')}
        </span>
        <Image
          src={'/images/findAgency1.png'}
          width={150}
          height={146}
          alt='right'
          className='w-[60px] h-[56px] sm:w-[150px] sm:h-[146px]'
        />
      </div>
      <div className='flex justify-center space-x-[2vw] -mt-12 sm:-mt-14 mx-4 sm:mx-0'>
        <div className='mt-8'>
          <SaveTimeCart
            text='Are you an agency ?'
            subText='Submit your agency to join our community'
            buttonText={t('save_time.submit')}
            onClick={handleSubmitClick}
          />
        </div>
        <div className='mt-8'>
          <SaveTimeCart
            text='Looking for an agency ?'
            subText='Find your suitable agency with our services'
            buttonText={t('save_time.connect')}
            onClick={handleConnectClick}
          />
        </div>
      </div>
    </div>
  )
}
