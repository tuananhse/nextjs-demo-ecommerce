import Image, { StaticImageData } from 'next/image'

const CardItem = ({
  title,
  content,
  image,
}: {
  title: string
  content: string
  image: StaticImageData
}) => {
  return (
    <div className='relative w-[380px] sm:w-[60vw] xl:w-[380px] 2xl:w-[417px] h-[172px] sm:h-[25vw] xl:h-[202px] flex flex-row space-y-2 space-x-2 px-6 py-7 bg-gradient-to-b from-[#1D88F8] to-[#8BE2FF] rounded-xl transition-transform duration-300 ease-in-out hover:scale-105'>
      <div className='flex flex-1 flex-col justify-center'>
        <span className='font-semibold text-[18px] sm:text-[20px] 2xl:text-[30px] text-white leading-none pb-3'>
          {title}
        </span>
        <span className='text-sm sm:text-lg xl:text-xl text-white'>
          {content}
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <Image
          src={image}
          width={144}
          height={144}
          quality={100}
          alt='img'
          className='xl:w-[124px] xl:h-[124px] 2xl:w-[144px] 2xl:h-[144px]'
        />
      </div>
    </div>
  )
}

export default CardItem
