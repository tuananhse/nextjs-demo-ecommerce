import { ProjectType } from '@/interfaces/home'
import { formatCurrency } from '@/utils'

const ProjectItem = ({ item }: { item: ProjectType }) => {
  return (
    <>
      <tr
        key={item?.id}
        className='bg-[#F0F0F0] border-b border-gray-200 transition-transform duration-300 ease-in-out hover:bg-[#E0E0E0]'
      >
        <td className='max-w-[80px] xl:max-w-[260px] text-center align-middle p-2 xl:p-4'>
          <span className='h-[40px] xl:h-[78px] cursor-pointer hover:shadow-xl py-2 xl:py-6 items-center font-normal justify-center text-xs xl:text-2xl px-2 xl:px-4  text-white bg-gradient-to-b from-[#1D88F8] to-[#9273FF] rounded-xl transition-shadow duration-300 ease-in-out'>
            {item?.name}
          </span>
        </td>
        <td className='text-xs xl:text-3xl max-w-[536px] text-center p-2 sm:p-4 font-normal'>
          {item?.clientName}
        </td>
        <td className='text-xs xl:text-[24px] gap-y-2 my-[1vw] flex-col flex text-wrap p-2 sm:p-4'>
          <span className='font-semibold'>ID: {item?.code}</span>
          <span className='py-2 text-xs sm:text-2xl'>{item?.description}</span>
        </td>
        <td className='max-w-[100px] xl:max-w-[300px] text-center align-middle p-2 xl:p-4'>
          <span className='inline-flex cursor-pointer hover:shadow-xl items-center border-2 border-white justify-center max-w-[92px] xl:max-w-[192px] h-[40px] xl:h-[78px] text-xs xl:text-2xl px-2 xl:px-8 font-extrabold text-white bg-gradient-to-b from-[#1D88F8] to-[#8BE2FF] rounded-xl xl:rounded-3xl transition-shadow duration-300 ease-in-out'>
            {formatCurrency(item?.budget)}
          </span>
        </td>
      </tr>
      <div className='h-2 sm:h-4 bg-white' />
    </>
  )
}

export default ProjectItem
