import ContactForm from '@/components/ui/News/ContactForm'
import { images } from '@/images/images'
import Image from 'next/image'

const NewsComponent = () => {
  // Extract common styles and reusable components
  const commonButtonStyles =
    'cursor-pointer whitespace-nowrap rounded-lg bg-button-text text-white font-semibold transition-colors duration-300 ease-in-out group-hover:bg-[#1D88F8]'
  const commonTitleStyles = 'font-semibold text-white'

  const NewsItem = ({ isMain = false }) => (
    <div
      className={`relative ${isMain ? 'max-w-[655px] xl:max-w-[655px] 2xl:max-w-[755px] hidden xl:block' : 'flex flex-row gap-x-4'} group`}
    >
      <Image
        src={images.banner_new}
        width={isMain ? 755 : 283}
        height={isMain ? 522 : 160}
        alt='banner'
        className={`${isMain ? 'w-[200vm] h-[122px] sm:w-[755px] sm:h-[522px]' : 'w-[183px] h-[60px] sm:w-[283px] sm:h-[160px]'} transition-transform duration-300 ease-in-out group-hover:scale-105`}
      />
      <div
        className={`${isMain ? 'absolute z-1 p-1 sm:p-10 bottom-0' : 'flex flex-col items-start justify-center gap-y-2'}`}
      >
        <div className='flex flex-col items-start gap-y-2'>
          <span
            className={`${commonButtonStyles} ${isMain ? 'h-[18px] sm:h-[58px] px-2 sm:px-12 text-xs sm:text-[28px]' : 'h-[18px] sm:h-[33px] px-2 sm:px-6 text-xs sm:text-base'} flex items-center justify-center`}
          >
            SOFTWARE DEVELOPMENT
          </span>
          <span
            className={`${isMain ? commonTitleStyles : 'font-medium text-black'} text-xs ${isMain ? 'sm:text-3xl' : 'sm:text-xl'} ${!isMain && 'transition-colors duration-300 ease-in-out group-hover:text-[#1D88F8]'}`}
          >
            Software Development Insights: Emerging Technologies and Best
            Practices
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className='w-full px-2 md:px-4 xl:px-9 py-4 md:py-8 xl:py-16'>
      <div className='flex-row flex justify-between pb-4 sm:pb-16'>
        <div className='flex flex-col'>
          <span className='inline-flex items-center border-white justify-center max-w-[92px] sm:max-w-[192px] h-[20px] sm:h-[42px] xl:h-[66px] text-sm sm:text-2xl px-2 sm:px-8 font-semibold text-white bg-gradient-to-b from-[#1D88F8] to-[#8BE2FF]'>
            NEWS
          </span>
          <div className='flex-1 pl-6 sm:pl-14 item-center inline-flex'>
            <span className='inline-flex items-center justify-center h-[20px] sm:h-[42px] xl:h-[50px] text-sm sm:text-2xl px-2 sm:px-8 font-semibold text-black italic bg-[#C6EAFF]'>
              UPDATE
            </span>
            <div className='relative flex-row flex'>
              <span
                className='absolute inline-flex w-[10px] sm:w-[30px] h-[20px] sm:h-[42px] xl:h-[50px] bg-[#C6EAFF]'
                style={{
                  clipPath: 'polygon(0 0, 50% 0, 0 0, 100% 50%, 0 100%, 0 50%)',
                  zIndex: 5,
                }}
              />
              <div className='flex-row flex absolute'>
                <span className='w-[0px] bg-white' />
                <span
                  className='inline-flex w-[20px] sm:w-[40px] h-[20px] sm:h-[42px] xl:h-[50px] bg-white border-none'
                  style={{
                    clipPath: 'polygon(10px 0, 100% 50%, 10px 100%)',
                    zIndex: 4,
                  }}
                />
              </div>
              <div className='flex-row flex absolute bg-white'>
                <span className='w-[5px] sm:w-[10px]' />
                <span
                  className='inline-flex w-[20px] sm:w-[40px] h-[20px] sm:h-[42px] xl:h-[50px] bg-[#1A85F8]'
                  style={{
                    clipPath: 'polygon(10px 0, 100% 50%, 10px 100%)',
                    zIndex: 3,
                  }}
                />
              </div>

              <div className='flex-row flex absolute bg-white'>
                <span className='w-[10px] sm:w-[20px]' />
                <span
                  className='inline-flex w-[20px] sm:w-[40px] h-[20px] sm:h-[42px] xl:h-[50px] bg-white'
                  style={{
                    clipPath: 'polygon(10px 0, 100% 50%, 10px 100%)',
                    zIndex: 2,
                  }}
                />
              </div>
              <div className='flex-row flex absolute '>
                <span className='w-[15px] sm:w-[30px]' />
                <span
                  className='inline-flex w-[20px] sm:w-[40px] h-[20px] sm:h-[42px] xl:h-[50px] bg-[#1A85F8]'
                  style={{
                    clipPath: 'polygon(10px 0, 100% 50%, 10px 100%)',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap sm:flex items-center justify-end sm:justify-center gap-1 sm:gap-2'>
          <span className='relative h-[4vw] flex items-center cursor-pointer select-none whitespace-nowrap rounded-2xl bg-button-text px-2 sm:px-6 xl:px-12 text-xs xl:text-[28px] font-semibold text-white transition-shadow duration-150 ease-in-out hover:bg-[#1D88F8] hover:shadow-lg'>
            Technology
          </span>
          <span className='relative h-[4vw] flex items-center cursor-pointer select-none whitespace-nowrap rounded-2xl bg-button-text px-2 sm:px-6 xl:px-12 text-xs xl:text-[28px] font-semibold text-white transition-shadow duration-150 ease-in-out hover:bg-[#1D88F8] hover:shadow-lg'>
            Software Development
          </span>

          <span className='relative flex h-[4vw] items-center gap-x-4 flex-row cursor-pointer select-none whitespace-nowrap rounded-2xl border border-button-text px-2 xl:px-12 text-xs xl:text-[28px] font-medium text-button-text transition-all ease-in-out duration-150 hover:bg-button-text hover:text-white hover:border-transparent hover:shadow-lg'>
            EXPLORE
            <Image
              src={images.ic_arrow_primary}
              width={20}
              height={18}
              alt='icon'
              className='w-[10px] h-[10px] sm:h-[18px]'
            />
          </span>
        </div>
      </div>

      <div
        key={'content'}
        className='flex flex-row gap-x-4 xl:gap-x-6 2xl:gap-x-8'
      >
        <NewsItem isMain={true} />
        <div className='flex-1 flex-col space-y-4'>
          {[1, 2, 3].map((_, index) => (
            <NewsItem key={index} />
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default NewsComponent
