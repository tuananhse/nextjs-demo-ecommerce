import ViewMoreButton from '@/components/ui/Button/ViewMoreButton'
import ProjectItem from '@/components/ui/LatestMarketplace/ProjectItem'
import { images } from '@/images/images'
import { ProjectResponse, ProjectType } from '@/interfaces/home'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './LatestMarketplace.module.css'

const TableHeader = ({ title }: { title: string }) => (
  <th className='py-3 px-4 sm:px-6'>
    <span className='text-[#66E5FB] font-bold text-sm sm:text-2xl'>
      {title}
    </span>
  </th>
)

export default function LatestMarketplace({ data }: ProjectResponse) {
  const t = useTranslations('home')

  const headers = [
    'marketplace.tab_project',
    'marketplace.tab_industry',
    'marketplace.tab_description',
    'marketplace.tab_budget',
  ]

  return (
    <div className='flex flex-col min-w-full mt-2 sm:mt-4 pb-8 sm:pb-16'>
      <div className='w-full text-center flex flex-row items-center justify-center pb-7 sm:pb-14'>
        <Image
          src={images.ic_agencies_right}
          alt='img'
          className='w-[135px] h-[23px] sm:w-[235px] sm:h-[46px]'
        />
        <span className={styles.text_gradient}>
          {t('marketplace.latest_marketplace_title')}
        </span>
        <Image
          src={images.ic_agencies_left}
          alt='img'
          className='w-[135px] h-[23px] sm:w-[235px] sm:h-[46px]'
        />
      </div>
      <div className='overflow-x-auto mx-4 sm:mx-12 pb-6'>
        <table className='min-w-full bg-white border-collapse'>
          <thead className='bg-[#0276DB] text-white'>
            <tr className='tracking-wide'>
              {headers.map((header, index) => (
                <TableHeader key={header} title={t(header)} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: ProjectType) => (
              <ProjectItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <ViewMoreButton title={t('marketplace.view_more')} arrow />
    </div>
  )
}
