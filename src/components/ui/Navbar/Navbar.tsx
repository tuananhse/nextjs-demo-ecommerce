'use client'
import { useState } from 'react'
import Navlinks from './Navlinks'
import Sidebar from '@/components/ui/Navbar/Sidebar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navlinks toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  )
}
