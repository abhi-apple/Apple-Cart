import React ,{useState}from "react";
import { AiOutlineMinus, AiOutlinePlus ,AiFillStar, AiOutlineStar,AiTwotoneStar, AiFillMinusCircle} from "react-icons/ai";
import { Product } from "../../components";
import { client, urlFor } from "../../lib/client";
<<<<<<< HEAD
import getStripe from "../../lib/getStripe";
import { useStateContext } from "../../context/StateContext";
const ProductDetails = ({ products, product }) => {
  const {  image ,name, details, price } = product;
  console.log(product)
=======
import { useStateContext } from "../../context/StateContext";
import { Configuration, OpenAIApi } from 'openai';
import axios from "axios";
// const configuration = new Configuration({
//     organization: "org-Jtr3z2pbpRxHJ3m54kazEBUF",
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);


const ProductDetails = ({ products, product }) => {
  const {  image ,name, details, price } = product;
  const [productDescription, setProductDescription] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> 1e3d7f1 (Updated code with new changes)
  const [index, setindex] = useState(0)
  const {qty,incqty,deccqty , setshowcart,cartitems,onAdd}=useStateContext();
  const handlecheckout= ()=>{
    onAdd(product,qty);
    setshowcart(true)
  }

<<<<<<< HEAD
=======
  async function getProductDetails(productName) {
    setIsLoading(true);
    console.log(productName);
    const options = {
      method: 'POST',
      url: 'https://chatgpt-api7.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'ce222f844dmshe102f93562134c4p184e64jsn78b106510366',
        'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com'
      },
      data: {
        query: `Write a detailed description in points for an apple product called ${productName}.`
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      const text = response.data.response.replace(/\n/g, '<br/> <br/>');
      setProductDescription('');
      let i = 0;
      const intervalId = setInterval(() => {
        setProductDescription(prevText => prevText + text.charAt(i));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
        }
      }, 50);
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
>>>>>>> 1e3d7f1 (Updated code with new changes)
  return (
    <div>
      <div className="product-detail-container">
        <div>
<<<<<<< HEAD
=======

>>>>>>> 1e3d7f1 (Updated code with new changes)
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item,i)=>(
              <img key={i} src={urlFor(item)}
              className={i===index ? 'small-image selected-image':'small-image'}
              onMouseEnter={()=>setindex(i)}
              />
            ))}
          </div>

        </div>
        <div className="product-detail-desc">
<<<<<<< HEAD
          <h1>{name}</h1>
=======

          <h1> {name}</h1>
          <button>
          </button>
>>>>>>> 1e3d7f1 (Updated code with new changes)
          <div className="reviews">
            <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              
              <AiOutlineStar/>
            </div>
            <p>(20)</p>
          </div>
          <h4> Details:</h4>
          <p>{details}</p>
<<<<<<< HEAD
          <p className="price">${price} </p>
=======
          <p className="price">₹{price} </p>
>>>>>>> 1e3d7f1 (Updated code with new changes)
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={deccqty}>
                <AiOutlineMinus/>
              </span>
              <span className="minus" >
                {qty}
              </span>
              <span className="plus" onClick={incqty}>
                <AiOutlinePlus/>
              </span>
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart" onClick={()=>onAdd(product,qty)}>
              Add To Cart
            </button>
            <button className="buy-now" onClick={handlecheckout}>
              Buy Now
            </button>
          </div>
        </div>
<<<<<<< HEAD
=======
        <div className="buttons">
      <h1>Product Details</h1>
      <button className=" custom-button"  onClick={() => getProductDetails( name)}>
        Generate Description
      </button>
      
      {isLoading ? (
     <span className="loader"></span>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: productDescription }} />
      )}
    </div>

>>>>>>> 1e3d7f1 (Updated code with new changes)
      </div>
      <div className="maylike-products-wrapper">
        <h2>You May Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item)=>(
              <Product key={item._id} product={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
<<<<<<< HEAD
// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
//   const productsquery = '*[_type=="product]';

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsquery);
//   const bannerquery = '*[_type=="banner"]';
//   const bannerdata = await client.fetch(bannerquery);
//   console.log(product);

//   return {
//     props: { products, bannerdata, product },
//   };
// };
=======
>>>>>>> 1e3d7f1 (Updated code with new changes)
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
<<<<<<< HEAD
=======



//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
>>>>>>> 1e3d7f1 (Updated code with new changes)
