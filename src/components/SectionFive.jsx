import React from 'react'
import icon1 from '../assets/images/icon2.png'
import icon2 from '../assets/images/icon1.png'
import icon3 from '../assets/images/icon3.png'


export default function SectionFive() {
  return (
    <section>
      <div className='p-40'>
        <h1 className='text-5xl font-bold'>The Dream come true with <span>ARCH</span></h1>
        <div className='flex gap-12 items-center justify-center p-12'></div>
        <div className="box p-10 flex flex-col gap-4 items-start rounded-xl hover:bg-green-100 cursor-pointer">
          <img className="w-16" src={icon1} alt="" />
          <h3 className='font-medium'>Interior design</h3>
          <p className='opacity-80 leading-7'>Architectural design combines creativity, functionality, and sustainability to craft spaces that inspire, enhance daily life, and seamlessly blend aesthetics with structural innovation for lasting impact.</p>
          <button>View More</button>
        </div>

        <div className="box p-10 flex flex-col gap-4 items-start rounded-xl hover:bg-green-100 cursor-pointer">
          <img className="w-16" src={icon2} alt="" />
          <h3 className='font-medium'>Architectural design</h3>
          <p>Architectural design combines creativity, functionality, and sustainability to craft spaces that inspire, enhance daily life, and seamlessly blend aesthetics with structural innovation for lasting impact.</p>
          <button>View More</button>
        </div>

        <div className="box p-10 flex flex-col gap-4 items-start rounded-xl hover:bg-green-100 cursor-pointer">
          <img className="w-16" src={icon3} alt="" />
          <h3 className='font-medium'>Landscaping design</h3>
          <p className='opacity-80 leading-7'>Architectural design combines creativity, functionality, and sustainability to craft spaces that inspire, enhance daily life, and seamlessly blend aesthetics with structural innovation for lasting impact.</p>
          <button>View More</button>
        </div>
      </div>
    </section>
  )
}
