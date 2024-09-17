import { usePathname, useRouter } from 'next/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { images } from '@/images/images'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import s from './Navbar.module.css'

interface NavlinksProps {
  user?: any
  toggle: () => void
}

export const NAV_ITEMS = [
  {
    key: 'AGENCY',
    label: 'AGENCY DIRECTORY',
    options: [
      'Branding & Creative',
      'Website & Interface',
      'Marketing',
      'Software & App',
      'IT Services',
    ],
  },
  {
    key: 'MARKETPLACE',
    label: 'MARKETPLACE',
  },
  {
    key: 'AWARDS',
    label: 'AWARDS',
    options: [
      'Website design Award',
      'Website design Award',
      'Website design Award',
      'Website design Award',
    ],
  },
  {
    key: 'NEWS',
    label: 'NEWS',
  },
  {
    key: 'LANGUAGE',
    label: 'LANGUAGE',
    options: ['VI', 'EN'],
  },
  {
    key: 'CONTACT',
    label: 'Contact us',
  },
]
export default function Navlinks({ toggle }: NavlinksProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const handleToggle = useCallback((index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }, [])

  const handleSelect = useCallback(
    (value: string) => {
      if (value === 'VI' || value === 'EN') {
        router.push(
          pathname.replace(
            value === 'VI' ? '/en' : '/vi',
            value === 'VI' ? '/vi' : '/en',
          ),
        )
      }
      setActiveIndex(null)
    },
    [router, pathname],
  )

  return (
    <div className='sm:sticky top-0 bg-white z-10 transition-all duration-150'>
      <div className='flex flex-row justify-between align-center mx-4 xl:mx-10 2xl:mx-16'>
        <div className='flex flex-1 flex-row h-16 sm:h-20 items-center'>
          <Image
            src={images.logo}
            alt='Logo'
            width={186}
            height={49}
            className='w-[176px] h-[39px] sm:w-[186px] sm:h-[49px] object-contain'
          />
          <button
            type='button'
            className='inline-flex flex-1 justify-end items-center xl:hidden'
            onClick={toggle}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 24 24'
            >
              <path
                fill='#000000'
                d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z'
              />
            </svg>
          </button>

          <nav className='hidden xl:flex gap-x-6 flex-1 mr-3 sm:mr-6 justify-end space-x-2'>
            <Menubar>
              {NAV_ITEMS.map((item, index) => (
                <MenubarMenu key={item.key}>
                  <MenubarTrigger onClick={() => handleToggle(index)}>
                    {item.key === 'CONTACT' ? (
                      <div className={s.contact_button}>{item.label}</div>
                    ) : (
                      <>
                        <span className='text-lg font-semibold text-[#838383] transition-all duration-300 ease-in-out hover:text-primary rounded-lg px-1 sm:px-2 py-1'>
                          {item.label}
                        </span>
                        {item.options && item.options.length > 0 && (
                          <ChevronDownIcon
                            className={`w-[1vw] h-[1vw] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                          />
                        )}
                      </>
                    )}
                  </MenubarTrigger>

                  {activeIndex === index &&
                    item.options &&
                    item.options.length > 0 && (
                      <MenubarContent
                        onChange={(open: any) => !open && setActiveIndex(null)}
                        className='flex items-center'
                      >
                        {item.key === 'AWARDS' && (
                          <div className='flex-shrink-0 mr-4'>
                            <Image
                              src={images.logo}
                              alt={item.label}
                              width={109}
                              height={188}
                              className='rounded-full'
                            />
                          </div>
                        )}
                        <div className='flex-grow'>
                          {item.options.map((option: string) => (
                            <MenubarItem
                              key={option}
                              onSelect={() => handleSelect(option)}
                              className='text-right'
                            >
                              {option}
                            </MenubarItem>
                          ))}
                        </div>
                      </MenubarContent>
                    )}
                </MenubarMenu>
              ))}
              <div className='cursor-pointer hover:shadow-lg hover:scale-105 transition-shadow duration-300 ease-in-out'>
                <Image
                  src={images.icPerson}
                  alt='person'
                  width={37}
                  height={39}
                  className='transition-transform duration-300 ease-in-out'
                />
              </div>
            </Menubar>
          </nav>
        </div>
      </div>
    </div>
  )
}
