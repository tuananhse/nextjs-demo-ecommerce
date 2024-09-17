import { images } from '@/images/images'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import Image from 'next/image'

interface Props {
  title: string
  arrow?: boolean
}
const ViewMoreButton = ({ title, arrow = false, ...props }: Props) => {
  return (
    <>
      <button
        {...props}
        className='flex-row flex items-center rounded-3xl border-black gap-x-3 border-2 self-center py-1.5 sm:py-3 px-2.5 sm:px-5 font-medium text-xs sm:text-base text-black hover:bg-button-text hover:text-white hover:border-button-text'
      >
        {title}
        {arrow ? (
          <Image
            src={images.ic_arrow_view_more}
            className='w-auto h-auto'
            alt='img'
          />
        ) : null}
      </button>
    </>
  )
}

export default ViewMoreButton
