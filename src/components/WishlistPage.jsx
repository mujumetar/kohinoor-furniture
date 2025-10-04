// import React from 'react';

// const WishlistPage = ({ wishlist, toggleWishlist, addToCart }) => (
//   <div className="min-h-screen pt-24 pb-16 bg-gray-50">
//     <div className="max-w-6xl mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
//       {wishlist.length === 0 ? <p className="text-gray-500">No items in wishlist</p> : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlist.map(item => (
//             <div key={item.id} className="bg-white p-4 rounded shadow">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />
//               <h3 className="font-semibold">{item.name}</h3>
//               <p className="text-amber-600 font-bold">${item.price}</p>
//               <div className="flex justify-between mt-3">
//                 <button onClick={() => toggleWishlist(item)} className="text-red-600">Remove</button>
//                 <button onClick={() => addToCart(item)} className="bg-amber-600 text-white px-4 py-2 rounded">Buy Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
// );

// export default WishlistPage;
