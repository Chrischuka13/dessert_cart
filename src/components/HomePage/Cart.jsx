// import React from 'react'
// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'


// const Cart = () => {
//     const { cartItems, removeFromCart } = useContext(CartContext);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity, 0
//   );
//   return (
//     <div className=''>
//         <div className='bg-white p-4 rounded-2xl mb-12 '>
//             <div className='font-bold text-[30px] text-amber-700'>Your ({cartItems.length})</div>

//             {cartItems.map(item => (
//                 <div key={item.id}>
//                     <span className='font-semibold'>{item.name}</span>
//                     <div className='flex gap-2 relative'>
//                         <span className='text-amber-700'>{item.quantity}x</span>
//                         <span className='text-gray-600'>@ ${(item.price * item.quantity).toFixed(2)}</span>
//                         <span className='text-gray-900 font-medium'>${item.price.toFixed(2)}</span>
//                     </div>  
                    

//                     <button className='' onClick={() => removeFromCart(item.id)}> <img src="./assets/images/icon-remove-item.svg" alt="" className='w-4 absolute m-auto flex hover:cursor-pointer' /> </button>
//                 </div>
//             ))}

//             <hr className='mb-2 mt-2'/>
//             <div className='flex justify-between items-center'>
//                 <h4 className='text-[18px]'>Order Total:</h4>
//                 <span className='font-bold text-[28px]'>${total.toFixed(2)}</span>
//             </div>   

//             <div className='p-4 mb-4 bg-amber-50 rounded-2xl'><span className='flex justify-center items-center gap-2 text-[16px]'><img src="./assets/images/icon-carbon-neutral.svg" />This is a carbon-neutral delivery</span></div>
//             <button className='bg-amber-700 text-white p-3 w-full rounded-4xl hover:cursor-pointer hover:bg-amber-600'>Confirm Order</button>
//         </div>
//     </div>
//   )
// }

// export default Cart