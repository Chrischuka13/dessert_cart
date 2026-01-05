import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const services = [
  {
    image: {

    },
    title: "Choose Menu",
    desc: "select the dessert you want and proceed to pay"
  },
  {
    image: {
     
    },
    title: "Check-out Order",
    desc: "click confirm order after done with selecting"
  },
  {
    image: {
        
    },
    title: "Wait for delivery",
    desc: "your order would be confirmed and sent immediately"
  },
]
    

const Home = () => {
    const navigate = useNavigate()
  return (
    <section>
        <div className='w-11/12 container mx-auto'>
            <nav className='py-6'>
                <h1 className='text-[36px] font-semibold'>Dessert</h1>
            </nav>
            <div className='hidden md:block bg-amber-400 max-w-[200px] p-2'>
                <p className='text-amber-700'>More Than Delicious</p>
            </div>
            
            <div className='md:flex gap-10 '>
                <div className='md:w-1/2'>
                    <h1 className='font-bold text-[36px] sm:text-[30px] md:text-[50px] lg:text-[80px] leading-tight'>We provide the best desserts for you</h1>
                    <p className='text-[20px] mt-4'>Our job is to filling your tummy with delicious food and with fast and free delivery</p>

                    <div className='md:flex md:space-x-8 mt-8'>
                        <button className='bg-amber-700 text-white p-4 w-full rounded-2xl hover:cursor-pointer hover:bg-amber-600 text-[18px]'><Link to="/orders">Order Now</Link></button>
                        <a href="./assets/video/8870623-hd_1920_1080_25fps.mp4" target='_blank' className='flex justify-center items-center gap-4 = font-semibold bg-none text-black p-4 w-full rounded-2xl hover:cursor-pointer hover:bg-amber-100 my-6 md:my-0'><img src="./public/images/play-button.svg" alt="" className='w-7' />Watch Video</a>
                    </div>
                    
                </div>
               
                <div className='md:w-1/2'>
                    <img src="/images/hero_mobile.jpg" alt="" className='block md:hidden rounded-2xl'/>
                    <img src="/images/hero_web.jpg" alt="" className='hidden md:block md:rounded-2xl w-full h-full object-cover'/>
                </div>
                
            </div>

            <div className='py-10'>
                <div className='text-center mt-8'>
                    <h2 className='text-[36px] font-bold'>How To Order</h2>
                    <p className='text-[18px] px-8'>Our job is to filling your tummy with delicious food and with fast and free delivery</p>
                </div>
                <div className='md:flex space-x-4 justify-between items-center'>
                    {services.map((service)=>{
                return  <div key={service.id} className=' text-center mt-8'>
                            {/* <div className='flex justify-center items-center'>
                                <img src={service.image.thumbnail} alt="" className=' w-[30px] mb-3 '/>
                            </div> */}
                            <div className='text-[24px] font-semibold'>{service.title}</div>
                            <div className='text-[18px]'>{service.desc}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        
    </section>
    
  )
}

export default Home