import { useState,useEffect } from 'react'
import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useDispatch ,useSelector } from 'react-redux';
import { add } from '../store/cartSlice';

import { getProducts } from '../store/productSlice';
import { Alert } from 'react-bootstrap';
import StatusCode from '../utils/StatusCode';

const Product = () => {
  const dispatch=useDispatch();
  const {data: products,status}=useSelector(state => state.products);

// const [products,getProducts]=useState([])
  useEffect(()=>{
    //dispatch an action for fetchProducts
    dispatch(getProducts());
    //Api
    // fetch('https://fakestoreapi.com/products')
    // .then(data=>data.json())
    // .then(result=>getProducts(result))
  },[])

  if(status === StatusCode.LOADING){    //'loading'
    return <p>Loading....</p>
  }

  if(status === StatusCode.ERROR){    //'error'
    return <Alert key="danger" variant='danger'>Something Went Wrong ! Try again later</Alert>
  }

  const addToCart=(product)=>{
    //dispatch an add action
    dispatch(add(product))
  }


  const cards =products.map(product =>(
    <div className="col-md-3" style={{marginBottom:'10px'}}>
       <Card key={product.id} className='h-100'>
     <div className='text-center'>
     <Card.Img variant="top" src={product.image}  style={{width:'100px',height:'130px'}} />
     </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        INR: {product.price}
        </Card.Text>
      </Card.Body>

      <Card.Footer style={{backgroundColor:'white'}}>
      <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ))
  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* {JSON.stringify(products)} */}

      <div className='row'>
        {cards}

      </div>

    </div>
  )
}

export default Product
