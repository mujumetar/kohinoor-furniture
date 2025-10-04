// import React from 'react';

// const HomePage = ({ setCurrentPage, products }) => (
//   <div className="pt-20">
//     <section className="bg-gray-50 py-20 text-center">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Koh-E-Noor Furniture</h1>
//       <p className="text-gray-600 mb-6">Luxury & Comfort for Your Home</p>
//       <button onClick={() => setCurrentPage('shop')} className="bg-amber-600 text-white px-6 py-3 rounded">Shop Now</button>
//     </section>
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.slice(0,3).map(p => (
//           <div key={p.id} className="bg-white p-4 rounded shadow">
//             <img src={p.image} alt={p.name} className="h-48 w-full object-cover rounded mb-4" />
//             <h3 className="font-semibold">{p.name}</h3>
//             <p className="text-amber-600 font-bold">${p.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//     <section className="bg-amber-50 py-12 text-center">
//       <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
//       <p className="max-w-2xl mx-auto text-gray-600">“Absolutely love the quality and design! Koh-E-Noor makes my home elegant.”</p>
//       <p className="font-semibold mt-2">— A Happy Customer</p>
//     </section>
//     <section className="max-w-3xl mx-auto px-4 py-16 text-center">
//       <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
//       <p className="text-gray-600 mb-4">Get exclusive offers & updates</p>
//       <input placeholder="Enter your email" className="border px-4 py-2 rounded w-2/3" />
//       <button className="ml-2 bg-amber-600 text-white px-4 py-2 rounded">Subscribe</button>
//     </section>
//   </div>
// );

// export default HomePage;
