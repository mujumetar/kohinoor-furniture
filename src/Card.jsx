import React from 'react'

const Card = () => {
    return (
        <div>
            <div
                x-data="{
            product: {
                title: 'SoundMax Pro X7 Wireless Noise-Cancelling Headphones',
                description: 'Experience premium sound quality with advanced active noise cancellation. Enjoy up to 36 hours of battery life and ultra-comfortable memory foam ear cushions for extended listening sessions. Compatible with all your devices via Bluetooth 5.2.',
                oldPrice: 349.99,
                currentPrice: 279.99,
                discount: 20,
                badge: 'New Release',
                rating: 5,
                reviews: 136,
                features: [
                    { icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z', text: '36h Battery' },
                    { icon: 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z', text: 'Fast Charge' },
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Bluetooth 5.2' }
                ]
            },
            isWishlisted: false,
            toggleWishlist() {
                this.isWishlisted = !this.isWishlisted;
            }
        }"
                className="w-full max-w-md bg-white rounded shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
            >
                <div className="relative h-72 overflow-hidden bg-gray-100">
                    <img src="https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Wireless Headphones" className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"/>

                        <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider">
                            <span x-text="product.badge"></span>
                        </div>

                     
            </div>

            <div className="p-6">
                <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">Audio</div>

                <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-3" x-text="product.title"></h2>

                <div className="flex items-center mb-4">
                    <div className="flex text-amber-400">
                        <template x-for="i in 5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </template>
                    </div>
                    <span className="text-gray-500 text-sm ml-2" x-text="`${product.reviews} reviews`"></span>
                </div>

                <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed line-clamp-3" x-text="product.description"></p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    <template x-for="feature in product.features">
                        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                              
                            </svg>
                            <span x-text="feature.text"></span>
                        </div>
                    </template>
                </div>

                <div className="mt-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
                    <div className="price-container">
                        <div className="text-gray-400 line-through text-sm mb-1">
                            $<span x-text="product.oldPrice.toFixed(2)"></span>
                        </div>
                        <div className="flex items-center">
                            <div className="text-4xl font-extrabold text-gray-900">
                                $<span x-text="product.currentPrice.toFixed(2)"></span>
                            </div>
                            <div className="ml-3 px-2 py-1 bg-pink-100 text-pink-700 rounded-md font-semibold text-sm">
                                -<span x-text="product.discount"></span>%
                            </div>
                        </div>
                    </div>

                    <button className="w-full lg:w-auto bg-indigo-600 text-white px-6 py-3 rounded font-semibold text-base shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                            <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div >
  )
}

export default Card