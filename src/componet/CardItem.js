
import {Col,Card}from "react-bootstrap"
function CardItem (props) {
     const { reqre } = props
    return ( 
        
<>

  
    <Col>
      <Card>
        <Card.Img variant="top" src={reqre.avatar} />
        <Card.Body>
          <Card.Title>{reqre.first_name} {reqre.last_name}</Card.Title>
          <Card.Text>
          {reqre.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 

</>
        
     );
}

export default CardItem;