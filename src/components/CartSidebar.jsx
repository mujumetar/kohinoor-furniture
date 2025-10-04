// import React from 'react';
// import { X, Trash2 } from 'lucide-react';

// const CartSidebar = ({ cart, setCart, showCart, setShowCart, placeOrder }) => (
//   <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${showCart ? 'translate-x-0' : 'translate-x-full'} z-50`}>
//     <div className="flex justify-between items-center p-4 border-b">
//       <h2 className="font-bold">Your Cart</h2>
//       <button onClick={() => setShowCart(false)}><X /></button>
//     </div>
//     <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
//       {cart.length === 0 ? <p className="text-gray-500">Cart is empty</p> : cart.map(item => (
//         <div key={item.id} className="flex justify-between items-center">
//           <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
//           <div>
//             <h4 className="font-semibold">{item.name}</h4>
//             <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
//           </div>
//           <button onClick={() => setCart(cart.filter(p => p.id !== item.id))} className="text-red-500"><Trash2 /></button>
//         </div>
//       ))}
//     </div>
//     {cart.length > 0 && <div className="p-4 border-t">
//       <button onClick={placeOrder} className="w-full bg-amber-600 text-white py-2 rounded">Checkout</button>
//     </div>}
//   </div>
// );

// export default CartSidebar;
