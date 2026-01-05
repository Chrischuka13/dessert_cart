import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'



const ConfirmOrder = ({show, onClose}) => {
  const navigate = useNavigate()
  const {cartItems, setCartItems} = useContext(CartContext)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

  const resetCart = () => {
  setCartItems([]);
  localStorage.removeItem("cart");
};

  if (!show) return null;


  return (
    <div className='p-6 fixed inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center h-screen overflow-y-auto'>
        <div className=' bg-white p-6 rounded-2xl'>
          <img src="/images/icon-order-confirmed.svg" alt="" />
          <h1 className='text-[30px] font-bold'>Order Confirmed</h1>
          <p className='text-[14px] mb-4'>We hope you enjoy your food!</p>

          {cartItems.map(item => (
              //display cart data
                <div key={item.id} className='bg-amber-50 p-6 '>
                  <div className='flex justify-between gap-4 items-center'>
                    <div>
                      <img src={item.image.thumbnail} alt="" className='w-12' />
                    </div>
                    
                      <div className='flex-1'>
                        <div>
                          <span className='font-semibold text-[10px] md:text-[18px] '>{item.name}</span>
                        </div>
                        
                        <div className='space-x-4'>
                          <span className='text-amber-700'>{item.quantity}x</span>
                          <span className='text-gray-600 font-medium text-[14px]'>${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                        
                    <div className='flex justify-center'>
                      <span className='text-black font-semibold text-[14px]'>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                   
                  </div>
                    
                </div>
            ))}

           
            <div className='flex justify-between items-center bg-amber-50 p-6'>
                <h4 className='text-[18px]'>Order Total:</h4>
                <span className='font-bold text-[28px]'>${total.toFixed(2)}</span>
            </div>

            <button onClick={()=> {onClose(), resetCart()}} className='bg-amber-700 text-white p-3 w-full rounded-4xl hover:cursor-pointer hover:bg-amber-600 mt-6'>Start New Order</button>
            
        </div>

    </div>

    
  )
}

export default ConfirmOrder