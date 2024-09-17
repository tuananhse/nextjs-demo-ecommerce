import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './JoinOut.module.css'
import { images } from '@/images/images'

export default function JoinOurComponent() {
  const t = useTranslations('home')

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex justify-center w-full font-bold text-[50px] text-center'>
        <span className={styles.text_gradient}>{t('join_our.title')}</span>
      </div>
      <div className='flex justify-center w-full text-[#2F5EAB] font-medium text-xs sm:text-3xl text-center'>
        {t('join_our.description')}
      </div>
      <Image
        src={images.join_our_banner}
        width={0}
        height={0}
        sizes='90vw'
        alt='Picture of the author'
        className='pt-[2.5vw] w-[96vw]'
      />
    </div>
  )
}
