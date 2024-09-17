import { images } from '@/images/images'
import Image from 'next/image'

interface Props {
  title: string
  arrow?: boolean
}
const CButton = ({ title, arrow = false, ...props }: Props) => {
  return (
    <>
      <button
        {...props}
        className='flex-row flex items-center border-button-border gap-x-3 border-2 self-center py-1.5 sm:py-3 px-1.5 sm:px-3.5 font-bold text-xs sm:text-base text-button-text hover:bg-button-text hover:text-white'
      >
        {title}
        {arrow ? (
          <Image
            src={images.ic_arrow_right}
            className='w-auto h-auto'
            alt='img'
          />
        ) : null}
      </button>
    </>
  )
}

export default CButton
