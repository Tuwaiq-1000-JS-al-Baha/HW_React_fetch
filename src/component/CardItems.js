import {Row,Col,  Card } from "react-bootstrap"



function CardItems(props) {
  return (
    <Row className="row row-cols-2 g-4">
    {props.users.map(item => (
         <Col>
          <Card>
            <Card.Header>
              {item.first_name} 
              {' ' } 
              {item.last_name}
            </Card.Header>
            <Card.Img variant="top" src={item.avatar}   />
            <Card.Body>
              <Card.Text>{item.email}</Card.Text>
            </Card.Body>
          </Card>
          </Col>

        ))}
     
        </Row>
    
  )
}

export default CardItems
