import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Navbar from './Navbar' ;

const Products = () => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProducts = await response.json();
    setProducts(dataProducts);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className='container'>
      <div className='row'>
        <Navbar />
        {products.map( (produk) => {
          return (
            <div className='col-3'>
              <CardProduct 
              key={produk.id} 
              title={produk.title} 
              price={produk.price} 
              description={produk.description} 
              images={produk.images} />
              </div> )}
          )
        }
        
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card className='d-flex flex-column m-1 p-2' style={{  height: 'auto'}}>
      <Card.Img className='rounded' variant="top" src={props.images} style={{ height: 'auto'}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className='d-flex flex-column justify-content-end'>
          <p>Price: {props.price} $</p>
          <Button variant="primary">BUY!</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Products;
