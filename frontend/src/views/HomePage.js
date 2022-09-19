//import { useState } from 'react';
import data from '../data.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Component/Product.js';

function HomePage() {
  //const [products, setProducts] = useState([]);
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        <Row>
          {data.products.map((product) => (
            <Col key={product.slug} sm={6} md={3} mg={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
