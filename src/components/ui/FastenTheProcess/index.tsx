'use client'
import CardItem from '@/components/ui/FastenTheProcess/CardItem'
import { DATA_FAKE } from '@/components/ui/FastenTheProcess/data'
import { useTranslations } from 'next-intl'

export default function FastenTheProcess() {
  const t = useTranslations('home')

  return (
    <div className='flex flex-col min-w-full mt-2 sm:mt-4 pb-8 sm:pb-16'>
      <div className='w-full bg-gradient-to-r from-[#1D88F8] via-[#1D88F8] to-[#8BE2FF] focus:ring-1 focus:outline-none focus:primary dark:focus:ring-blue-800'>
        <span className='flex items-center justify-center text-lg sm:text-2xl xl:text-4xl 2xl:text-5xl text-white font-bold text-center py-4'>
          {t('product.fasten_the_process')}
        </span>
      </div>
      <div className='flex flex-col xl:flex-row justify-center space-y-4 xl:space-y-0 space-x-0 xl:space-x-[25px] 2xl:space-x-[45px] items-center pt-6 sm:pt-12 px-[20px] xl:px-[30px] 2xl:px-[50px]'>
        {DATA_FAKE.map((item, index) => (
          <div key={index}>
            <CardItem
              title={item.title}
              content={item.content}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
