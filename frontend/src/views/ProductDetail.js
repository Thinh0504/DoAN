import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductDetail from '../Component/ProductDetail.js';

import data from '../data.js';

function ProductDetailPage() {
  const params = useParams();
  const { slug } = params;
  return (
    <Row>
      {data.products.map((product) => (
        <ProductDetail product={product}></ProductDetail>
      ))}
    </Row>
  );
}

export default ProductDetailPage;
