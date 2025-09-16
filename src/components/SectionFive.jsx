import React from 'react'
import img1 from '../assets/images/img3.jpg'
import img2 from '../assets/images/image-19.jpg'
import img3 from '../assets/images/img5.png'
import img4 from '../assets/images/img2.jpg'
import img5 from '../assets/images/img4.jpg'
import img6 from '../assets/images/image-9.png'


export default function SectionFive() {
  const articles=[
    {
      id:1,
      img: img1,
      heading:"Discover cutting-edge urban planning concepts, smart city innovations, and architectural solutions"
    },
    {
      id:2,
      img: img2,
      heading:"Learn about groundbreaking advancements in construction, 3D printing, AI-driven design, and sustainable technologies"
    },
    {
      id:3,
      img: img3,
      heading:"Learn about groundbreaking advancements in construction, 3D printing, AI-driven design, and sustainable technologies"
    },
    {
      id:4,
      img: img4,
      heading:"Learn about groundbreaking advancements in construction, 3D printing, AI-driven design, and sustainable technologies"
    },
    {
      id:5,
      img: img5,
      heading:"Learn about groundbreaking advancements in construction, 3D printing, AI-driven design, and sustainable technologies"
    },
    {
      id:6,
      img: img6,
      heading:"Learn about groundbreaking advancements in construction, 3D printing, AI-driven design, and sustainable technologies"
    }
  ]
  return (
    <section className='p-40 flex flex-col gap-20 items-center justify-center border border-gray-300'>
        <h1 className='text-4xl text-bold'>Blog / News</h1>

        <div className='flex flex-wrap items-center justify-center gap-20'>
            {articles.map((article, index)=>{
              return(
                <div className={`${index >= 4 ? "hidden":""} flex flex-col gap-2 w-96`} key={article.id}>
                  <img className="max-h-[500px] max-w-[600px] h-full object-cover rounded-lg" src={article.img} alt="" />
                  <h3>{article.heading}</h3>
                  <button className='text-green-500 font-bold'>More Details</button>
                </div>
              )
            })}
        </div>

        <button className='btn border border-gray-300 px-12 mt-12 '>See More</button>
    </section>
  )
}

// Architectural design combines creativity, functionality, and sustainability to craft spaces that inspire, enhance daily life, and seamlessly blend aesthetics with structural innovation for lasting impact.