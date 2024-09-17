'use client'

import { DATA_FAKE } from '@/components/ui/ProductAdoptionBanner/data'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ProductAdoptionBanner() {
  const t = useTranslations('home')

  return (
    <div className='flex flex-col items-center justify-center w-full mt-2 sm:mt-4 mb-2.5 sm:mb-5'>
      <span className='flex text-lg sm:text-2xl text-[#15B0F8] font-medium'>
        {t('product.banner_title')}
      </span>
      <div className='flex flex-row space-x-2.5 sm:space-x-5 items-center pt-2.5 sm:pt-5'>
        {DATA_FAKE.map((item, index) => (
          <div key={index}>
            <Image
              src={item}
              width={100}
              height={200}
              quality={100}
              alt={`${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
