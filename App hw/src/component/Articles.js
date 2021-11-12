import CardItem from "./CardItem";

function Articles(props) {
    const { articles } = props
    return ( 
        <>
       
        {articles.map(article => (
          <CardItem article={article} />
          
        ))}

        </>
     );
}

export default Articles;