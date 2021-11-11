
import CardItem from "./CardItem";
import{Row }from "react-bootstrap"
function Reqre (props) {
    const {reqres} = props
    return (  
        <>
        <Row xs={1} md={2} className="g-4">
        {reqres.map(reqre => (

       <CardItem reqre={reqre}/>
       
        ))}
        </Row>
        </>
    );
}

export default Reqre ;