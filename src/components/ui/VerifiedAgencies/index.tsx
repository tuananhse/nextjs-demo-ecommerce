import ViewMoreButton from '@/components/ui/Button/ViewMoreButton'
import CardItem from '@/components/ui/VerifiedAgencies/CardItem'
import { DATA_FAKE } from '@/components/ui/VerifiedAgencies/data'
import { images } from '@/images/images'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './VerifiedAgencies.module.css'

const Divider = ({ direction }: { direction: 'left' | 'right' }) => (
  <div
    className={`flex-1 h-0.5 w-full bg-gradient-to-r 
    from-${direction === 'left' ? '[#8BE2FF]' : '[#1D88F8]'} 
    via-[#1D88F8] 
    to-${direction === 'left' ? '[#1D88F8]' : '[#8BE2FF]'} 
    focus:ring-1 focus:outline-none focus:primary dark:focus:ring-blue-800`}
  />
)

export default function VerifiedAgencies() {
  const t = useTranslations('home')

  return (
    <div className='flex flex-col min-w-full mt-2 sm:mt-4 pb-8 sm:pb-16 xl:px-6'>
      <div className='w-full text-center px-14 flex flex-row items-center justify-center'>
        <Divider direction='left' />
        <div>
          <span className={styles.text_gradient}>
            {t('agencies.verified_agencies')}
          </span>
        </div>
        <Divider direction='right' />
      </div>

      <div className='items-center justify-center flex'>
        <Image src={images.ic_star} className='w-[184px] h-auto' alt={'img'} />
      </div>

      <div className='pt-7 sm:pt-14 px-4 sm:px-14 pb-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
          {DATA_FAKE.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
      </div>

      <ViewMoreButton title={t('agencies.view_all')} arrow />
    </div>
  )
}
