import Image, { StaticImageData } from 'next/image'

const CardItem = ({
  title,
  image,
}: {
  title: string
  image: StaticImageData
}) => {
  return (
    <div className='relative group'>
      <div className='w-[311px] h-[135px] rounded-xl bg-primary transition-transform duration-300 ease-in-out group-hover:scale-105'></div>
      <div className='absolute w-[311px] h-[135px] z-1 top-3 right-3 flex flex-row space-y-2 space-x-2 px-6 py-7 bg-white rounded-xl border-primary border transition-shadow duration-300 ease-in-out group-hover:shadow-lg'>
        <div className='flex flex-1 flex-col justify-center'>
          <span className='font-semibold text-[24px] text-[#07557A] leading-none pb-3'>
            {title}
          </span>
        </div>
        <div className='w-[75px] h-[75px] bg-[#9273FF] rounded-full flex items-center justify-center'>
          <Image src={image} width={54} height={54} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default CardItem
