'use client'

import StarIcon from '@/components/icons/Star'
import { images } from '@/images/images'
import { DividerVerticalIcon } from '@radix-ui/react-icons'
import { ExternalLink, EyeIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const CardItem = ({ item }: { item: any }) => {
  const t = useTranslations('home')

  return (
    <div className='overflow-visible'>
      <div className='w-full h-auto xl:h-[311px] flex justify-between flex-col bg-white px-2 xl:px-4 py-2 xl:py-4 rounded-xl shadow-xl'>
        <div className='flex flex-row align-middle justify-center items-center'>
          <div className='w-[60px] xl:w-[170px] h-[54px] xl:h-[104px] flex justify-center mx-2 xl:mx-0'>
            <Image src={item?.image} width={104} height={104} alt='img' />
          </div>
          <div className='flex-1 flex-col space-y-1 xl:space-y-2'>
            <div className='flex flex-row items-center '>
              <div className='flex-1 space-y-1'>
                <span className='flex-1 font-medium text-sm xl:text-[24px] text-[#09263B] leading-none pb-1 xl:pb-3'>
                  {item?.title}
                </span>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className='text-yellow-400' />
                  ))}
                </div>
              </div>
              <Image
                alt='img'
                src={images.ic_card_sticker}
                className='w-[28px] xl:w-[38px] y-[28px] xl:y-[38px] items-end '
              />
            </div>
            <span className='text-sm xl:text-[17px] text-[#09263B] leading-none pb-1 xl:pb-3'>
              {item?.content}
            </span>
            <div key={'location'} className='flex gap-2 py-1 xl:py-0'>
              <Image
                alt='img'
                src={images.ic_location}
                className='w-[14px] h-[20px] xl:w-[19px] xl:h-[25px]'
              />
              <div className='space-x-1 flex-row flex items-center flex-wrap'>
                {item?.location?.map(
                  (val: any, index: number, arr: string[]) => (
                    <div key={index} className='inline-flex items-center'>
                      <span className='text-xs xl:text-lg font-medium'>
                        {val}
                      </span>
                      {arr.length - 1 !== index && (
                        <div>
                          <DividerVerticalIcon className='h-[24px]' />
                        </div>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='flex-col items-end justify-end'>
          <div key={'service'} className='flex gap-1 flex-wrap'>
            {item.service.map((val: any, index: number) => (
              <span
                key={index}
                className='relative cursor-pointer grid select-none whitespace-nowrap rounded-full bg-button-text py-1 px-1.5 xl:px-3 text-xs xl:text-xs font-bold text-white'
              >
                {val}
              </span>
            ))}
          </div>
          <div className='flex gap-2 justify-center pt-2 xl:pt-6'>
            <button className='items-center cursor-pointer hover:shadow-xl hover:bg-[#e35555] hover:border-[#e35555] rounded-lg border-2 text-xs xl:text-base flex-row flex gap-1 xl:gap-2 border-[#FD6E6F] bg-[#FD6E6F] px-3 xl:px-6 text-white py-1 xl:py-2'>
              {t('agencies.view_profile')}
              <EyeIcon size={22} />
            </button>
            <button className='items-center cursor-pointer hover:shadow-xl hover:bg-[#FD6E6F] hover:text-white rounded-lg text-xs xl:text-base flex-row flex gap-1 xl:gap-2 border-2 text-[#FD6E6F] border-[#FD6E6F] px-3 xl:px-6 py-1 xl:py-2'>
              {t('agencies.view_website')}
              <ExternalLink size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
