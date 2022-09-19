import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
function ProductDetail(params) {
  const { product } = params;
  return (
    <Row>
      <Col md="6">
        <img className="img-large" src alt={product.name}></img>
      </Col>
      <Col md="3">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h1>{product.name}</h1>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ProductDetail;
