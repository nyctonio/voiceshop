import React from 'react'

export default function Cardv2() {
    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={img} />
            </a>
            <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
                <p class="mt-1">{price}</p>
                <span>
                <button class="px-2 py-1 text-xs 
                font-semibold text-gray-900 
                uppercase transition-colors duration-200 
                transform bg-white rounded hover:bg-gray-200 
              focus:bg-gray-400 focus:outline-none">Add to cart</button>
                </span>
            </div>
            
        </div>
    )
}
