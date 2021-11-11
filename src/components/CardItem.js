import axios from "axios"
import { Row, Col, Card } from "react-bootstrap"

function CardItem(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {props.users.map(user => (
        <Col>
          <Card>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
              <Card.Title>{user.first_name}</Card.Title>
              <Card.Title>{user.last_name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardItem
