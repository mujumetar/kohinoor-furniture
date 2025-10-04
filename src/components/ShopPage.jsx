// import React from 'react';
// import { Heart } from 'lucide-react';

// const ShopPage = ({ products, wishlist, toggleWishlist, addToCart }) => (
//   <div className="min-h-screen pt-24 pb-16 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6">Our Collection</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="bg-white p-4 rounded shadow">
//             <div className="relative">
//               <img src={product.image} alt={product.name} className="h-56 w-full object-cover rounded mb-4" />
//               <button onClick={() => toggleWishlist(product)} className={`absolute top-2 right-2 p-2 rounded-full ${wishlist.find(w => w.id === product.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} shadow`}>
//                 <Heart className="w-5 h-5" />
//               </button>
//             </div>
//             <h3 className="font-semibold">{product.name}</h3>
//             <p className="text-amber-600 font-bold">${product.price}</p>
//             <button onClick={() => addToCart(product)} className="mt-3 w-full bg-amber-600 text-white px-4 py-2 rounded">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default ShopPage;
