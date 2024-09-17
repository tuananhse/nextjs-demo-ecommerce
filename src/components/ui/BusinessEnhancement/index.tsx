'use client'
import { DATA_FAKE } from '@/components/ui/BusinessEnhancement/data'
import { images } from '@/images/images'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function BusinessEnhancement() {
  const t = useTranslations('home')

  const Item = ({ title, content }: { title: string; content: string }) => {
    return (
      <li className='flex flex-col space-y-0 sm:space-y-1 xl:space-y-2'>
        <span className='font-bold text-lg sm:text-[30px] xl:text-[38px] text-primary'>
          {title}
        </span>
        <span className='text-sm sm:text-[20px] xl:text-[30px] leading-0 sm:leading-8 text-black max-w-[646px]'>
          {content}
        </span>
      </li>
    )
  }
  return (
    <div className='flex flex-col items-center px-2 justify-center w-full mt-2 sm:mt-16 pb-8 sm:pb-16'>
      <span className='flex text-xl sm:text-3xl xl:text-5xl text-black font-bold text-center'>
        {t('product.enhance_business_title')}
      </span>
      <div className='flex flex-col sm:flex-row space-x-2.5 sm:space-x-[60px] xl:space-x-[90px] items-center pt-6 sm:pt-12'>
        <Image
          src={images.enhance_business_banner}
          width={409}
          height={413}
          alt='banner'
          className='w-[209px] sm:w-[309px] xl:w-[409px] h-[213px] sm:h-[312px] xl:h-[412px]'
        />
        <div>
          <ul className='space-y-4 sm:space-y-4 xl:space-y-8'>
            {DATA_FAKE.map((item, index) => (
              <div key={index}>
                <Item title={item.title} content={item.content} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
