'use client'

import Image from 'next/image'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { useRef, useState } from 'react'
import { testimonials } from './data'

export default function TestimonialsComponent() {
  const carouselRef = useRef<CarouselRef>(null)
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(testimonials.length - 1)
      carouselRef.current?.goTo(testimonials.length - 1)
    } else {
      setCurrent(current - 1)
      carouselRef.current?.goTo(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === testimonials.length - 1) {
      setCurrent(0)
      carouselRef.current?.goTo(0)
    } else {
      setCurrent(current + 1)
      carouselRef.current?.goTo(current + 1)
    }
  }

  return (
    <div className='text-center w-full h-full relative mt-8 lg:mt-24'>
      <Image
        width={1440}
        height={776}
        alt='bg'
        src={'/images/freeform_background.svg'}
        className='w-full'
      />
      <div className='absolute top-0 w-full'>
        <div className='text-center font-semibold text-[3.5vw] mt-3 lg:mt-8 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2891F8] to-[#9273FF] to-87%'>
          Our Testimonials
        </div>
        <div className='text-center font-bold text-[3.3vw] text-white'>
          What our partners say about us
        </div>
        <div className='flex'>
          <div className='w-1/4 m-auto' onClick={previousSlide}>
            <Image
              className='w-[2.5vw] mx-auto cursor-pointer'
              width={34}
              height={55}
              alt='left'
              src={'/images/freeform_left.png'}
            />
          </div>
          <div className='w-1/2'>
            <Carousel dots={false} ref={carouselRef}>
              {testimonials.map((testimonial, x) => (
                <div
                  key={testimonial.id}
                  className={`w-full mx-auto text-center bg-[#83838351] rounded-[6px] text-white mt-2 lg:mt-6 px-3 py-2 lg:px-12 lg:py-8`}
                >
                  <div>
                    <Image
                      className='w-[7vw] mx-auto cursor-pointer'
                      width={103}
                      height={94}
                      alt='avatar'
                      src={testimonial.image}
                    />
                  </div>
                  <div className='font-semibold text-[3vw]'>
                    {testimonial.name}
                  </div>
                  <div className='italic text-[2vw] mt-[-1vw]'>
                    {testimonial.title}
                  </div>
                  <div>
                    <Image
                      className='w-[10vw] mx-auto cursor-pointer'
                      width={160}
                      height={28}
                      alt='stars'
                      src={'/images/freeform_stars.png'}
                    />
                  </div>
                  <div className='text-start text-[1.3vw] pt-2 lg:pt-6'>
                    {testimonial.text}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className='w-1/4 m-auto' onClick={nextSlide}>
            <Image
              className='w-[2.5vw] mx-auto cursor-pointer'
              width={34}
              height={55}
              alt='right'
              src={'/images/freeform_right.png'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
