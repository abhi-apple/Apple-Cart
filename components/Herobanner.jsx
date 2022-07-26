import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'
const Herobanner = ({herobanner}) => {
  console.log(herobanner.product)
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{herobanner?.smallText}</p>
        <br />
        <h3 >{herobanner?.midText}</h3>
        <h1>{herobanner?.largeText1}</h1>
        <img src={urlFor(herobanner.image)} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href={`/product/${herobanner.product}`}>
            <button type='button' >{herobanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{herobanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herobanner

//https://cdn.sanity.io/images/y7pke7fj/production/82ad0a754a506295f243c53e205a5a47bfd81355-800x800.webp
//image-82ad0a754a506295f243c53e205a5a47bfd81355-800x800-webp