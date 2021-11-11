import { Card, Col } from "react-bootstrap"

function NewItem(props) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.New.urlToImage} />
        <Card.Body>
          <Card.Title>{props.New.title}</Card.Title>
          <Card.Text>Author: {props.New.author}</Card.Text>
          <Card.Text>Description: {props.New.description} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NewItem
