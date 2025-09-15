import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'




export default function SectionOne() {
  return (
    <section className='h-screen overflow-hidden'> 
        <div className='flex items-center justify-between h-full'>
            <div className='p-20 flex-1'>
                <p className='text-[5rem] font-bold loading-none mb-10'>We Design <br/>Your Dreams</p>
                <div className='flex gap-4'>
                    <button className='btn bg-green-500 px-7 py-4 rounded-xl  text-white'>Request a call</button>
                    <button className='btn border border-gray-600  px-7 py-4 rounded-xl'>To get a consultation</button>
                </div>
            </div>
            <div className="flex-1 flex gap-4 justify-end">
              <img src={img1} alt="" className='img w-24 h-[480px] object-cover rounded-lg'/>
              <img src={img2} alt="" className="img img w-24 h-[480px] object-cover rounded-lg"/>
              <img src={img3} alt="" className="img img w-24 h-[480px] object-cover rounded-lg"/>
              <img src={img4} alt="" className="img img w-24 h-[480px] object-cover rounded-lg"/>
              <img src={img5} alt="" className="img img w-24 h-[480px] object-cover rounded-lg"/>
              <img src={img6} alt="" className="img img w-24 h-[480px] object-cover rounded-lg"/>
            </div>
            
        </div>
    </section>
  )
}
