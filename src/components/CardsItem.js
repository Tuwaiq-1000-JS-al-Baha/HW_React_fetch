import { Card, Row, Col } from "react-bootstrap"
function CardItem(props) {
  return (
    <Row>
      {" "}
      {props.news.map(news => (
        <Col>
          <Card style={{ width: "12rem" }}>
            {" "}
            <Card.Img variant="top" src={news.urlToImage} />{" "}
            <Card.Body>
              {" "}
              <Card.Title className="title">
                {" "}
                {news.title}
                {news.author}
              </Card.Title>{" "}
              <Card.Text>
                {" "}
                {news.description} <h5 class="h5"> author: {news.author}</h5>{" "}
              </Card.Text>{" "}
            </Card.Body>{" "}
          </Card>
        </Col>
      ))}{" "}
    </Row>
  )
}
export default CardItem
