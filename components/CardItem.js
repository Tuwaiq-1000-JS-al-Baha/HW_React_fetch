import { Card,Row,Col } from "react-bootstrap"
function CardItem(props) {
  return (
    <><Row xs={1} md={3} className="g-4 w-70 m-5 mx-auto">
      {props.users.map(user => (
        
       
          <Col>
            <Card>
              <Card.Img variant="top" src={user.avatar} />
              <Card.Body> 
                <Card.Title>  {user.first_name}</Card.Title>
                <Card.Title>  {user.last_name}</Card.Title>
                <Card.Text>
                Email: {user.email}
              
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
     
      )}
       </Row>
    </>
 
  )
}

export default CardItem
