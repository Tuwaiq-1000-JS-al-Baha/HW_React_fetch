import { Card , Col } from "react-bootstrap"

function CardItem(props) {
  const { article } = props
    return ( 
    <>
    
  
    <Col>
      <Card>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.name}</Card.Title>
          <Card.Text>
            {article.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  

    </> );
}

export default CardItem;