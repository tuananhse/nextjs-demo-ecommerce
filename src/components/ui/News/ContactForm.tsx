import { images } from '@/images/images'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const ContactForm = () => {
  const t = useTranslations('home')
  return (
    <div className='mx-[5vw] mt-[5vw] space-y-6 flex flex-col py-4 sm:py-12 px-6 sm:px-11 bg-gradient-to-b from-[#1D88F8] to-[#86DFFF]'>
      <div className='flex flex-col space-y-4'>
        <span className='text-sm sm:text-[24px] xl:text-[40px] text-white font-bold'>
          {t('news.keep_up')}
        </span>
        <span className='text-xs sm:text-lg font-normal text-white'>
          {t('news.keep_up_content')}
        </span>
      </div>
      <div
        key={'input'}
        className='flex flex-col xl:flex-row items-center space-x-0 xl:space-x-11 space-y-4 xl:space-y-0'
      >
        <div className='relative'>
          <input
            type='text'
            name='username'
            id='username'
            className='block w-full h-[33px] sm:w-[300px] sm:h-[50px] xl:w-[340px] 2xl:w-[400px] md:h-[60px] text-xs sm:text-sm rounded-md border-0 py-1.5 pl-8 sm:pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6'
            placeholder={t('news.your_name')}
          />
          <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
            <Image
              src={images.ic_person}
              width={37}
              height={37}
              alt='person'
              quality={100}
              className='w-[1.8vw] h-[1.6vw]'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className='relative'>
          <input
            type='text'
            name='email'
            id='email'
            className='block w-full h-[33px] sm:w-[300px] sm:h-[50px] xl:w-[340px] 2xl:w-[400px] md:h-[60px] text-xs sm:text-sm rounded-md border-0 py-1.5 pl-8 sm:pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6'
            placeholder={t('news.email')}
          />
          <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
            <Image
              src={images.ic_email}
              width={37}
              height={37}
              alt='person'
              quality={100}
              className='w-[1.8vw] h-[1.6vw]'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <button className='bg-button-text text-center min-h-8 sm:min-h-12 text-white font-bold text-xs sm:text-xl xl:text-2xl rounded-lg px-6 transition-transform duration-300 ease-in-out hover:shadow-xl'>
          {t('news.subscribe')}
        </button>
      </div>
    </div>
  )
}

export default ContactForm
