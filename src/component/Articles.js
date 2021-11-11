import { Row } from "react-bootstrap"
import CardItem from "./CardItem";

function Articles(props) {
    const { articles } = props
    return ( 
        <Row xs={1} md={2} className="g-4">
        {articles.map(article => (
          <CardItem article={article} />
        ))}
        
        </Row>
     );
}

export default Articles;