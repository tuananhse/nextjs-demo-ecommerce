'use client'
import CardItem from '@/components/ui/Agencies/CardItem'
import CButton from '@/components/ui/Button/CButton'
import { images } from '@/images/images'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import './Agencies.module.css'
import styles from './Agencies.module.css'

export default function Agencies() {
  const t = useTranslations('home')

  return (
    <div className='flex flex-col min-w-full mt-2 sm:mt-4 pb-8 sm:pb-16'>
      <div className='w-full text-center flex flex-row items-center justify-center'>
        <Image
          src={images.ic_agencies_right}
          alt='img'
          className='w-[135px] h-[23px] sm:w-[235px] sm:h-[46px]'
        />
        <span className={styles.text_gradient}>
          {t('product.agencies_with_variety')}
        </span>
        <Image
          src={images.ic_agencies_left}
          alt='img'
          className='w-[135px] h-[23px] sm:w-[235px] sm:h-[46px]'
        />
      </div>
      <div className='flex flex-col xl:flex-col space-y-6 xl:space-y-14 items-center pt-6 xl:pt-12 px-[50px] bg-agencies_bg bg-content bg-no-repeat bg-bottom'>
        <div className='flex flex-col xl:flex-row space-x-0 xl:space-x-14 space-y-6 xl:space-y-0'>
          <CardItem title='Branding & Creative' image={images.ic_branding} />
          <CardItem title='Website & Interface' image={images.ic_website} />
          <CardItem title='Software & App' image={images.ic_software} />
        </div>
        <div className='flex flex-col xl:flex-row space-x-0 xl:space-x-14 space-y-6 xl:space-y-0'>
          <CardItem title='Digital Marketing' image={images.ic_digital} />
          <CardItem title='IT Services' image={images.ic_it} />
        </div>
        <div className='pb-8 sm:pb-16'>
          <CButton title={t('product.agencies_view_all')} arrow />
        </div>
      </div>
    </div>
  )
}
