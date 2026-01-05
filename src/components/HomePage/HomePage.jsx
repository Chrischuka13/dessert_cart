import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ConfirmOrder from './ConfirmOrder';
import { Link, useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const { addToCart } = useContext(CartContext);
    const { cartItems, removeFromCart } = useContext(CartContext);
    const [modalOpen, setModalOpen] = useState(false);


    //Total Amount of Item(s) in cart
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  //Total Item(s) Quantity/Count
  const totalsum = cartItems.reduce(
    (sum, item) => sum + item.quantity, 0
  )

    useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json));
    }, []);

    useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  
  const onSubmit = () => {
    setModalOpen(true)
  }



  return (
    <section className='bg-amber-50'>
        <div className='w-11/12 container mx-auto text-[36px] font-bold py-8'>Desserts</div>
        <div className='w-11/12 container mx-auto md:flex md:space-x-5'>
        <div className='md:grid-cols-3 gap-4 sm:grid sm:grid-cols md:w-3/4 '>

            {data.map(item =>(
            //display product data
            <div key={item.id} className='relative '>
                <img src={item.image.mobile} alt="" className='block md:hidden lg:hidden rounded-2xl'/>
                <img src={item.image.tablet} alt="" className='hidden md:block lg:hidden rounded-2xl'/>
                <img src={item.image.desktop} alt="" className='hidden md:hidden lg:block rounded-2xl'/>

                <button onClick={() => addToCart(item)} className='absolute inset-0 m-auto flex justify-center items-center mb-20 sm:mb-30 h-fit w-fit rounded-full border border-gray-500 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-md hover:cursor-pointer hover:bg-amber-600 hover:text-white hover:border-none' data-product-name={item.name}><span className='flex gap-2'><img src="/images/icon-add-to-cart.svg" alt="" />Add to Cart</span></button>
                
                <p className='text-[16px] text-gray-600 mt-6'>{item.category}</p>
                <p className='font-semibold text-[18px]'>{item.name}</p>
                <p className='text-[18px] text-amber-700 mb-6 font-semibold'>${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            </div>
            ))}

        </div>


        <div className='md:w-7/20'>
        <div className='bg-white p-4 rounded-2xl mb-12'>
            <div className='font-bold text-[30px] text-amber-700'>Your Cart({totalsum})</div>

            {cartItems.map(items => (
              //display cart data
                <div key={items.id}>
                    <span className='font-semibold'>{items.name}</span>
                    <div className='flex justify-between'>
                      <div className='flex space-x-3'>
                        <span className='text-amber-700'>{items.quantity}x</span>
                        <span className='text-gray-600'>@ ${(items.price * items.quantity).toFixed(2)}</span>
                        <span className='text-gray-900 font-medium'>${items.price.toFixed(2)}</span>
                      </div>
                        
                      <div className=''>
                        <button className='' onClick={() => removeFromCart(items.id)}> <img src="/images/icon-remove-item.svg" alt="" className='w-4 hover:cursor-pointer' /> </button>
                      </div>
                    </div>  
                    
                     <hr className='mb-2 mt-2'/>
                    
                </div>
            ))}

           
            <div className='flex justify-between items-center py-4'>
                <h4 className='text-[18px]'>Order Total:</h4>
                <span className='font-bold text-[28px]'>${total.toFixed(2)}</span>
            </div>  

            {/* <input type="phone" id='phone' value={phone} onChange={(event) => setPhone(event.target.value)} disabled={cartItems.length === 0} maxLength={11} className='p-2 border rounded-lg mb-4 focus:outline-none focus:border-amber-700 w-full' placeholder='add phonenumber'/>  */}

            <div className='p-4 mb-4 bg-amber-50 rounded-2xl'><span className='flex justify-center items-center gap-2 text-[16px]'><img src="/images/icon-carbon-neutral.svg" />This is a carbon-neutral delivery</span></div>
            <button onClick={onSubmit} disabled={cartItems.length === 0} className={` text-white p-3 w-full rounded-4xl hover:cursor-pointer ${cartItems.length === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-amber-700 text-white hover:bg-amber-600"}`}>Confirm Order</button> 
        </div>
    </div>
    </div>

    {modalOpen && <ConfirmOrder show={modalOpen} onClose={() => setModalOpen(false)} />}
    </section>

    
  )
}

export default HomePage