import { Card, Button } from "react-bootstrap"
function Cards(props) {
  return (
    <div class="row row-cols-4 g-2">
      {props.card.map(item => (
        <div class="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.urlToImage} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Go Here</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Cards
