import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, Herobanner } from '../components';
const Home = ({products,bannerdata}) => {
  return (
    <>
    <Herobanner herobanner={bannerdata.length && bannerdata[0]}/>
    {/* {console.log(bannerdata)}  */}
    <div className='products-heading'>
      <h2>Apple Products </h2>
      <p>One stop for all your needs </p>
    </div>

    <div className='products-container'>
      {/* {console.log(products)} */}

      {products?.map((product)=><Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerbanner={bannerdata && bannerdata[0]}/>
    </>
  )
}

export const getServerSideProps =async()=>{
  const query='*[_type=="product"]';
  const products= await client.fetch(query)
  const bannerquery='*[_type=="banner"]';
  const bannerdata= await client.fetch(bannerquery)

  return {
    props:{products,bannerdata}
  }
}
export default Home