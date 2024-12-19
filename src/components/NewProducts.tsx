import React from 'react'
import ProductCard from './ProductCard';

const productData = [
    {
        img: "/full-zip-jacket.jpg",
        title: "JACKET",
        desc: "MEN Yarn Fleece Full-Zip Jacket",
        rating: 1,
        price: "37.00",
    },
    {
        img: "/midi-kirt.jpg",
        title: "SKIRT",
        desc: "White Floral Wrap Midi Skirt",
        rating: 2,
        price: "43.00",
    },
    {
        img: "/wear-shoes.jpg",
        title: "PARTY WEAR",
        desc: "Men's Party Wear Shoes",
        rating: 3,
        price: "30.00",
    },
    {
        img: "/shirt.jpg",
        title: "SHIRT",
        desc: "Pure Garment Dyed Cotton Shirt's",
        rating: 4,
        price: "33.00",
    },
    {
        img: "/running-shoes.jpg",
        title: "SPORTS",
        desc: "Trekking & Running Shoe's - Black",
        rating: 5,
        price: "25.00",
    },
    {
        img: "/smart-watch.jpg",
        title: "WATCHES",
        desc: "Smart Watches Vital Plus",
        rating: 5,
        price: "16.00",
    },
    {
        img: "/jewelry.jpg",
        title: "JEWELRY",
        desc: "Women's Best Quality Jewelry",
        rating: 4,
        price: "583.00",
    },
    {
        img: "/pocket-watch.jpg",
        title: "WATCHES",
        desc: "Pocket Watch Leather Pouch",
        rating: 2,
        price: "42.00",
    },
];

const NewProducts = () => {
    return (
        <div>
            <div className='container pt-16'>
                <h2 className='font-bold text-4xl pb-8 text-red-600 '>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {productData.map((item, index) => (
                        <ProductCard key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default NewProducts
